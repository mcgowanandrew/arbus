"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const moment = require("moment");
const short = require("short-uuid");
const assert = require("assert");



const addSubmission = async (req, res) => {
  const bookId = short.generate();
  const dateSubmitted = moment().format("MMM-D-YYYY-HH:mm");
  const {
    title,
    photographer,
    size,
    pages,
    edition,
    editionSize,
    publicationDate,
    publisher,
    language,
    printing,
    extraDetails,
    imageTwo,
    imageThree,
    imageFour,
  } = req.body;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");
    const db = client.db("arbus");
    const result = await db.collection("submissions").insertOne({
      _id: bookId,
      title: title,
      photographer: photographer,
      size: size,
      pages: pages,
      edition: edition,
      editionSize: editionSize,
      publicationDate: publicationDate,
      publisher: publisher,
      language: language,
      printing: printing,
      extraDetails: extraDetails,
      dateSubmitted: dateSubmitted,
      imageTwo: imageTwo,
      imageThree:imageThree,
      imageFour:imageFour,
    });
    assert.strictEqual(1, result.insertedCount);
    res.status(201).json({
      status: 201,
      data: result,
    });
    client.close();
    console.log("disconnected");
  } catch (err) {}
};
const getAllSubmissions = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const allBooks = await db.collection("submissions").find().toArray();
    assert(1, allBooks.matchedCount);

    res.status(200).json({ status: 200, data: allBooks });
    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: "Didn't work 🤬" });
  }
};
const deleteSubmission = async (req, res) => {
  const _id = req.params._id;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const sub = await db.collection("submissions").deleteOne({ _id });
    assert(1, sub.deletedCount);
    res.status(200).json({ status: 200, message: "Success" });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Error" });
  }
};
const getSubById = async (req, res) => {
  let _id = req.params._id;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const subResult = await db.collection("submissions").findOne({ _id });
    assert(1, subResult.matchedCount);

    res.status(201).json({ status: 201, data: subResult });
    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error" });
  }
};




const getAllBooks = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const allBooks = await db.collection("catalogue").find().toArray();
    assert(1, allBooks.matchedCount);

    res.status(200).json({ status: 200, data: allBooks });
    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: "Didn't work 🤬" });
  }
};

const getBookById = async (req, res) => {
  let _id = req.params._id;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const result = await db.collection("catalogue").findOne({ _id });
    client.close();
    res.status(201).json({ status: 201, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error" });
  }
};

const getBooksByPhotographer = async (req, res) => {
  let photographer = req.params.photographer;
  console.log(photographer);
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const result = await db
      .collection("catalogue")
      .find({ photographer })
      .toArray();
    // assert(1, result.matchedCount);
    console.log(result);
    client.close();

    res.status(201).json({ status: 201, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error" });
  }
};
const getBookByPublisher = async (req, res) => {
  let publisher = req.params.publisher;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const result = await db.collection("catalogue").find({ publisher }).toArray();
    client.close();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error" });
  }
};
// getBooksByPhotographer()
// addBook();
module.exports = {

  getAllBooks,
  getBookById,
  getBooksByPhotographer,
  getBookByPublisher,
  addSubmission,
  getAllSubmissions,
  deleteSubmission,
  getSubById,
  
};

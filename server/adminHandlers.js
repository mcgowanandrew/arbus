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

const addBook = async (req, res) => {
  const bookId = short.generate();
  const dateAdded = moment().format("MMM-D-YYYY-HH:mm");
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
    images,
    imageTwo,
    imageThree,
    imageFour,
  } = req.body;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");
    const db = client.db("arbus");
    const result = await db.collection("catalogue").insertOne({
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
      dateAdded: dateAdded,
      images: images,
      imageTwo: imageTwo,
      imageThree: imageThree,
      imageFour: imageFour,
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

const updateBook = async (req, res) => {
  let _id = req.params._id;
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
    images,
  } = req.body;
  const updatedBook = {
    $set: {
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
      images: images,
    },
  };
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const book = await db
      .collection("catalogue")
      .updateOne({ _id }, updatedBook);
    assert(1, book.matchedCount);
    assert(1, book.updateCount);
    res.status(200).json({
      status: 200,
      message: "Sucess",
    });
    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: "Didn't work 🤬" });
  }
};

const editBookById = async (req, res) => {
  let _id = req.params._id;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const subResult = await db.collection("catalogue").findOne({ _id });
    assert(1, subResult.matchedCount);

    res.status(201).json({ status: 201, data: subResult });
    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error" });
  }
};

const deleteBook = async (req, res) => {
  const _id = req.params._id;
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("arbus");
    const sub = await db.collection("catalogue").deleteOne({ _id });
    assert(1, sub.deletedCount);
    res.status(200).json({ status: 200, message: "Success" });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Error" });
  }
};

module.exports = { addBook, updateBook, editBookById, deleteBook };

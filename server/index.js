const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const {
  getAllBooks,
  getBookById,
  getBooksByPhotographer,
  getBookByPublisher,
  addSubmission,
  getAllSubmissions,
  deleteSubmission,
  getSubById,
} = require("./handlers");
const { addBook, updateBook, editBookById ,deleteBook} = require("./adminHandlers");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

app.use("/admin/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("tiny"));
app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/"));

app.post("/admin/add", addBook);
app.post("/submissions", addSubmission);

app.patch("/catalogue/update/:_id", updateBook);

app.get("/catalogue/all-books", getAllBooks);
app.get("/catalogue/:_id", getBookById);
app.get("/edit/:_id", editBookById);
app.get("/catalogue/photographer/:photographer", getBooksByPhotographer);
app.get("/catalogue/publisher/:publisher", getBookByPublisher);
app.get("/admin/all-submissions", getAllSubmissions);
app.get("/admin/sub/edit/:_id", getSubById);

app.delete("/admin/catalogue/:_id",deleteBook)
app.delete("/admin/sub/:_id", deleteSubmission);
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} `);
});

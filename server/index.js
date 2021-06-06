const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const {
  addBook,
  getAllBooks,
  getBookById,
  getBooksByPhotographer,
  getBookByPublisher,
  addSubmission,getAllSubmissions
} = require("./handlers");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use('/admin/login', (req, res) => {
  res.send({
    token: 'test123'
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
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

app.post("/admin/add", addBook);
app.post("/submissions",addSubmission)
app.get("/catalogue/all-books", getAllBooks);
app.get("/catalogue/:_id", getBookById);
app.get("/catalogue/:photographer", getBooksByPhotographer);
app.get("/catalogue/:publisher", getBookByPublisher);
app.get("/admin/all-submissions",getAllSubmissions)
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} `);
});

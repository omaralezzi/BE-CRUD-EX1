const express = require("express");
const app = express();
const items = require("./routes/items.js");
// const bodyParser = require('body-parser');
// const path = require('path');
// const book = [
//   {
//     id: 1,
//     title: "JavaScript",
//     author: "Mosh",
//     year: "2023",
//   },
//   {
//     id: 2,
//     title: "JavaScript to the moon",
//     author: "Ali",
//     year: "2003",
//   },
// ];

app.use("/items", items);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/items/books", (req, res) => {}); // get all books

// app.post("/items/books", (req, res) => {}); // add a book...create a book

// app
// .route("/items/books")
// .get((req, res) => {})
// .post((req, res) => {});

// // app.get("/items/books/:bookid", (req, res) => {}); // get existing book...get a book

// // app.put("/items/books", (req, res) => {}); // update existing book ...update a book

// // app.delete("/items/books/:bookid", (req, res) => {}); // delete existing book ...delete a book

// app
// .route("/items/books/:bookid")
// .get((req, res) => {})
// .put((req, res) => {})
// .delete((req, res) => {});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

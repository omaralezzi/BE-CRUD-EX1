const express = require("express");

let router = express.Router();

//localhost:5000/items/books
router
  .route("/books")
  .get((req, res) => {
    res.send("GET: it is route /items/books");
  })
  .post((req, res) => {
    res.send("POST: it is route /items/books");
  });

//localhost:5000/items/books/anything
router
  .route("/books/:bookid")
  .get((req, res) => {
    res.send("GET: it is route /items/books/" + req.params.bookid);
  })
  .put((req, res) => {
    res.send("PUT: it is route /items/books/" + req.params.bookid);
  })
  .delete((req, res) => {
    res.send("DELETE: it is route /items/books/" + req.params.bookid);
  });

module.exports = router;

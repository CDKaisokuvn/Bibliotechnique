const express = require("express");

const {
  newAuthor,
  createAuthor,
  getAllAuthor,
} = require("../controllers/authors");
const router = express.Router();

// All authors route
router.get("/", getAllAuthor);

// New author route
router.get("/new", newAuthor);

// Create new author route
router.post("/", createAuthor);

module.exports = router;

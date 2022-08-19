const Author = require("../models/author");

//Get All authors controller
const getAllAuthor = async (req, res) => {
  try {
    let searchOptions = {};

    if (req.query.name !== null && req.query.name !== "") {
      searchOptions.name = new RegExp(req.query.name, "i");
    }
    const authors = await Author.find(searchOptions).sort({ createdAt: -1 });
    return res.render("authors/index", { authors, searchOptions: req.query });
  } catch (error) {
    res.redirect("authors", { errorMessage: error.message });
  }
};

//New author controller
const newAuthor = (req, res) => {
  res.render("authors/new");
};

//Cretae author controller
const createAuthor = async (req, res) => {
  try {
    await Author.create({ name: req.body.name });
    res.redirect("authors");
  } catch (error) {
    res.render("authors/new", { errorMessage: error.message });
  }
};
module.exports = { getAllAuthor, newAuthor, createAuthor };

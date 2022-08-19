const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const authorRoutes = require("./routes/authors");

const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(port, console.log(`Server is listening on ${port}`));
});

app.use("/authors", authorRoutes);
app.use("/", indexRoutes);

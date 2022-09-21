const path = require("path");
const htmlRoute = require('express').Router();


// GET 'notes', returns notes.html file.
htmlRoute.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// GET '*', returns index.html file.
htmlRoute.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = htmlRoute;
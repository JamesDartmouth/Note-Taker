const path = require("path");
// const app = require('express').Router();

module.exports = app => {
// GET 'notes', returns notes.html file.
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// GET '*', returns index.html file.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
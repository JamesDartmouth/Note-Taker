const db = require("../db/db.json");
const fs = require("fs");
// const app = require('express').Router();

module.exports = app => {
// GET 'api/notes' returns db.json file as JSON
  app.get("/api/notes", (req, res) => {
    res.json(db);
  });
// POST 'api/notes' receives new note and pushes it into db.json file
  app.post("/api/notes", (req, res) => {
    
    db.push(req.body);
    

   
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });

  // DELETE 'api/notes' from db.json file
  app.delete("/api/notes/:id",(req, res) => {
    var id = req.params.id;
 


    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });
};
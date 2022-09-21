const db = require("../db/db.json");
const fs = require("fs");
const apiRoute = require('express').Router();


// GET 'api/notes' returns db.json file as JSON
apiRoute.get("/notes", (req, res) => {
  res.json(db);
});
// POST 'api/notes' receives new note and pushes it into db.json file
apiRoute.post("/notes", (req, res) => {

  const addNewNote = (addNote, storedNotes)=>{
      fs.readFile(storedNotes, "utf8", (err, data) => {
          if (err){
            console.log(err)
          }
          else{
            const parsedNotes = JSON.parse(data) 
            parsedNotes.push(addNote)
            fs.writeFile(storedNotes, JSON.stringify(parsedNotes))
          }

      })

  }
  const {title, text}= req.body
  const newNote = {title, text}
  addNewNote(newNote, "../db/db.json")


  // db.push(req.body);

//adds an id

  // fs.writeFile("./db/db.json", JSON.stringify(db), function () {
  //   res.json(db);
  // });
});

// DELETE 'api/notes' from db.json file
apiRoute.delete("/notes/:id", (req, res) => {
  var id = req.params.id;



  fs.writeFile("./db/db.json", JSON.stringify(db), function () {
    res.json(db);
  });
});

module.exports = apiRoute;
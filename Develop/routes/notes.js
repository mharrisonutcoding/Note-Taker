const notes = require("express").Router();
const { uuid } = require('uuidv4');
const { readFromFile, readAndAppend } = require("../utils/fsUtil");
const fs = require("fs");

// GET route for data in dbJSON
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// new note POST route
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json("Note was added!");
  } else {
    res.errored("Couldn't Add Note!");
  }
  console.log("Saved");
});

module.exports = notes;
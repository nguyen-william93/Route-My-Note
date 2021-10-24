const router = require('express').Router();
const notes  = require("../../db/db.json");
const { createNewNote, validateNote, findNoteById, deleteNote } = require('../../lib/note');
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
    let result = notes;
    res.json(notes);
})

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();

    if (!validateNote(req.body)){
        res.status(404).send("The note is not properly formatted");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete("/notes/:id", (req, res) => {
    let note = findNoteById(req.params.id, notes);
    deleteNote(note, notes);
    res.json(note);
})


module.exports = router;
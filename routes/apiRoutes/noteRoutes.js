const router = require('express').Router();
const notes  = require("../../db/db.json");
const { createNewNote, validateNote, findNoteById, deleteNote } = require('../../lib/note'); //utility function (found inside lib folder)
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

//get all note from db.json at the note page
router.get("/notes", (req, res) => {
    let result = notes;
    res.json(notes);
})

//post route to add note to the db.json
router.post("/notes", (req, res) => {
    req.body.id = uuidv4(); //creating a unique id for the body of request

    if (!validateNote(req.body)){
        res.status(404).send("The note is not properly formatted");
    } else {
        const note = createNewNote(req.body, notes); //the createNewNote function return the note that was being pass in (req.body)
        res.json(note); 
    }
});

//delete route, delete note base on ID passed in
router.delete("/notes/:id", (req, res) => {
    // find the id
    let result = findNoteById(req.params.id, notes);
    //passing in the id and the notes array
    deleteNote(result, notes);
    //return the updated note list
    res.json(notes);
})


module.exports = router;
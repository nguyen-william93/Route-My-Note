const router = require('express').Router();
const notes  = require("../../db/db.json");

router.get("/notes", (req, res) => {
    let result = notes;
    console.log(result);
    res.json(notes);
})

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    // const note = createNewNote(req.body, notes);


})


module.exports = router;
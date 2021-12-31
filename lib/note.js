const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArr){
    const note = body;
    noteArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(noteArr, 2, null)
    )
    return note;
};

function validateNote(note){
    console.log(typeof note.title);
    if(!note.title || typeof note.title !== "string"){
        return false;
    }
    if(!note.text || typeof note.text !== "string"){
        return false;
    }
    return true;
};

function findNoteById(id, noteArr){
    //find the note with that id
    const result = noteArr.filter(note => note.id === id);
    return result;
};

function deleteNote (body, noteArr){
    //delete the note by popping it out of the array
    let note = body;
    noteArr.pop(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(noteArr, 2, null)
    )
    return note;
};

module.exports = {
    createNewNote,
    validateNote,
    findNoteById,
    deleteNote
}
const notesController = {};

const NoteModel = require('../models/Note');

// Get notes
notesController.getNotes = async (req, res) => {
    //console.log(req.user);
    const notes = await NoteModel.find();
    res.json(notes);
    //res.render('/all-notes', {notes});
};

// New note
notesController.createNewNote = async (req, res) => {
    //console.log(req.body);
    const {title, content, date, user} = req.body;
    const newNote = new NoteModel({
        title: title, content: content, date:date, user: user});
    //console.log(newNote);
    await newNote.save();

    res.json({message: 'Note Saved'});
};

// Get single note
notesController.getNote = async (req, res) => {
    //console.log(req.params.id);
    const note = await NoteModel.findById(req.params.id);
    res.json(note);
};

// Edit note
notesController.updateNote = async (req, res) => {
    const {title, content, user} = req.body;
    await NoteModel.findOneAndUpdate({_id: req.params.id},
         {title: title, content: content, user: user})
    res.send('put - note updated');
};

// Delete note
notesController.deleteNote = async (req, res) => {    
    await NoteModel.findOneAndDelete({_id: req.params.id});
    res.send('Delete - note deleted');
};

module.exports = notesController; 



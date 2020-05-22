const notesController = {};

// Get notes
notesController.getNotes = (req, res) => {
    res.json({message: 'get with a controller'})
};

// New note
notesController.createNewNote = (req, res) => {
    res.send('post - new note created')
};

// Get single note
notesController.getNote = (req, res) => {
    //console.log(req.user);
    res.json({message: 'get single with a controller'})
};

// Edit note
notesController.updateNote = (req, res) => {
    res.send('put - note updated')
};

// Delete note
notesController.deleteNote = (req, res) => {    
    res.send('Delete - note deleted')
};

module.exports = notesController; 



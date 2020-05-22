const { Router } = require('express');
const router = Router();

const { getNotes, createNewNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controller');

router.route('/')
   .get(getNotes)
   .post(createNewNote)

    
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)


module.exports = router;
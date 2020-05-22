const express = require('express');
const cors = require('cors');


// Initializations
const app = express();


// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Global Variables

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/notes', require('./routes/notes.routes'));

// Static Files

module.exports = app;
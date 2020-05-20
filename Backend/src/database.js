const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/databasetest';

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes.js");

const cors = require("cors");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connection to database established'));

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use('/notes', notesRouter);

app.listen(5000, function () {
    console.log('great');
})
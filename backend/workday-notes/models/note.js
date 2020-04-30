const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    file:{
        required:true,
        type: String
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', noteSchema);
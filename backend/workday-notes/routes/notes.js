const express = require("express");
const mongoose = require("mongoose");
const Note = require("../models/note");
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){cb(null, './uploads')},
    filename: function(req, file, cb){cb(null, file.originalname)}
})

const upload = multer({storage:storage});
const router = express.Router();



router.get('/', async (req, res) => {
   
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }

});

router.post('/create', upload.single('image') , async (req, res) => {
    
   try {
       const image = req.file;

       if(!image){
           res.status(400).send({
               status:false,
               data:'no file selected'
           });
       }else{
            const note = new Note({
                'title':req.body.title,
                'body':req.body.body,
                'file':image.originalname

            });
            const newNote = await note.save();
            res.status(201).json(newNote);
       }
       
   } catch (error) {
       res.status(500).send(error);
   }
});

router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id
        });
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({
            message: "we couldnt get that note, please try again!!!"
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id
        });
        const path = './uploads/' + note.file;
        fs.unlinkSync(path);

        await Note.remove({
            _id: req.params.id
        });

        const notes = await Note.find();
        
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({
            message: "we couldnt delete that note, please try again!!!"
        });
    }
});

router.patch('/:id', async (req, res) => {
    const note = await Note.findOne({
        _id: req.params.id
    });

    if (req.body.title != null) {
        note.title = req.body.title;
    }
    if (req.body.body != null) {
        note.body = req.body.body;
    }
    try {
        await note.save();
        res.status(200).json({
            message: `Note ${note.id} has been updated it!!`
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

module.exports = router;
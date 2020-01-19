const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log('MongoDB database connection established sucessfully');
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');

app.get('/', (req,res)=>{
	console.log('someone get connected');
	res.send('Hello World');
});
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/teams', teamsRouter);

app.listen(port, () => {
	console.log('Server is running on port: ', port);
});

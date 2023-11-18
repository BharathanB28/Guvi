const express = require('express');
const app = express();
const cors = require('cors');
const mentorsRouter = require('./controllers/mentors');
const studentsRouter = require('./controllers/students');

app.use(cors());
app.use(express.json());

//Initial state
app.get('/', (req, res) => {
    res.send('Hello, this is Bharathan, Welcome to Mentor and Student Assigning with Database!');
  });
  
app.get('/mentors', mentorsRouter);
app.get('/students', studentsRouter);
app.post('/create-mentor', mentorsRouter);
app.post('/create-student', studentsRouter);
app.post('/assign-students', mentorsRouter);
app.get('/students-without-mentor', studentsRouter);
app.post('/change-mentor', studentsRouter);
app.get('/students/:mentorId', mentorsRouter);
app.get('/previous-mentor/:studentId', studentsRouter);

module.exports = app;
const express = require("express");
const studentsRouter = express.Router();
const Mentor = require("../models/mentor");
const Student = require("../models/student");
const mongoose = require("mongoose");


// Endpoint to get all the students
studentsRouter.get('/students', async (req, res) => {
    Student.find({}, {})
        .then(students => {
            res.status(200).json(students);
        });
});

// Endpoint to create a Student
studentsRouter.post("/create-student", async (req, res) => {
  try {
    const { studentId,studentName } = req.body;
    const student = new Student({
      id: studentId,
      name: studentName,
      mentorId: null, 
    });


    await student.save();
    res.status(201).json({success: "Student created successfully", student});
    } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Enpoint to get the list of students without a mentor
studentsRouter.get("/students-without-mentor", async (req, res) => {
    try {
      const studentsWithoutMentor = await Student.find({ mentorId: null });
      res.json(studentsWithoutMentor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });



// Endpoint to change the mentor for a particular student
studentsRouter.post("/change-mentor", async (req, res) => {
    try {
        // Extract studentId and newMentorId from the request body
        const { studentId, mentorId } = req.body;

        // Convert studentId and newMentorId to MongoDB ObjectId
        const studentObjectId = new mongoose.Types.ObjectId(studentId);
        const mentorObjectId = new mongoose.Types.ObjectId(mentorId);

        // Check if studentId and newMentorId are in valid ObjectId format
        if (!studentObjectId || !mentorObjectId) {
            return res.status(400).json({ success: false, message: 'Invalid studentId or newMentorId format' });
        }

        // Find the student in the database
        const student = await Student.findById(studentObjectId);

        // If student not found, respond with a 404 status
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found." });
        }

        // Find the mentor in the database
        const mentor = await Mentor.findById(mentorObjectId);

        // If new mentor not found, respond with a 404 status
        if (!mentor) {
            return res.status(404).json({ success: false, message: "New mentor not found." });
        }

        // Update the student's mentorId with the new mentor's ID and save to the database
        student.mentorId = mentorObjectId;
        await student.save();

        // Respond with a success message
        res.json({ success: true, message: "Mentor changed successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


// Endpoint to get the previously assigned mentor for a particular student
studentsRouter.get("/previous-mentor/:studentId", async (req, res) => {
  try {
      // Extract studentId from the request parameters
      const { studentId } = req.params;

      // Convert studentId to MongoDB ObjectId
      const studentObjectId = new mongoose.Types.ObjectId(studentId);

      // Check if studentId is in valid ObjectId format
      if (!studentObjectId) {
          return res.status(400).json({ success: false, message: 'Invalid studentId format' });
      }

      // Find the student in the database
      const student = await Student.findById(studentObjectId);

      // If student not found, respond with a 404 status
      if (!student) {
          return res.status(404).json({ success: false, message: "Student not found." });
      }

      // Check if the student has a previously assigned mentor
      if (!student.previousMentors || student.previousMentors.length === 0) {
          return res.status(404).json({ success: false, message: "No previous mentor assigned." });
      }

      // Take the first element of the previousMentors array as an example
      const previousMentorId = student.previousMentors[0];

      // Respond with the details of the previously assigned mentor (only include the studentId and previousMentorId)
      res.status(200).json({
          studentId: studentId,
          previousMentorId: previousMentorId
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = studentsRouter;
const express = require("express");
const mentorsRouter = express.Router();
const Mentor = require("../models/mentor");
const Student = require("../models/student");
const mongoose = require("mongoose");

// Endpoint to get all the mentors
mentorsRouter.get('/mentors', async (req, res) => {
    try {
        // Retrieve all mentors from the database
        const mentors = await Mentor.find({}, {});
        res.status(200).json(mentors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Endpoint to create a Mentor
mentorsRouter.post("/create-mentor", async (req, res) => {
    try {
        // Extract mentorId and mentorName from the request body
        const { mentorId, mentorName } = req.body;

        // Create a new Mentor instance with the provided details
        const mentor = new Mentor({
            id: mentorId, // Assuming you want to use mentorId as the id property
            name: mentorName,
            students: [], // Initialize with an empty array
        });

        // Save the new mentor to the database
        await mentor.save();
        
        // Respond with a success message and the created mentor
        res.status(201).json({ success: "Mentor created successfully", mentor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Assign multiple students to one mentor
mentorsRouter.post("/assign-students", async (req, res) => {
    try {
        // Extract mentorId and studentIds from the request body
        const { mentorId, studentIds } = req.body;

        // Convert mentorId and studentIds to MongoDB ObjectId
        const mentorObjectId = new mongoose.Types.ObjectId(mentorId);
        const studentObjectIds = studentIds.map(studentId => new mongoose.Types.ObjectId(studentId));

        // Check if mentorId is in a valid ObjectId format
        if (!mentorObjectId) {
            return res.status(400).json({ success: false, message: 'Invalid mentorId format' });
        }

        // Find the mentor in the database
        const mentor = await Mentor.findById(mentorObjectId);

        // If mentor not found, respond with a 404 status
        if (!mentor) {
            return res.status(404).json({ success: false, message: "Mentor not found." });
        }

        // Find students without a mentor from the provided list
        const studentsWithoutMentor = await Student.find({ mentorId: null, _id: { $in: studentObjectIds } });

        // Check if all selected students are without a mentor
        if (studentsWithoutMentor.length !== studentObjectIds.length) {
            return res.status(400).json({ success: false, message: "One or more selected students already have a mentor." });
        }

        // Update the mentor's students list
        mentor.students.push(...studentObjectIds);
        
        // Update the students' mentorId and add the mentor to previousMentors
        const updatedStudents = await Student.updateMany(
            { _id: { $in: studentObjectIds } },
            {
                $set: { mentorId: mentorObjectId },
                $addToSet: { previousMentors: mentorObjectId },
            },
            { multi: true }
        );

        // Save the mentor after updating the students
        await mentor.save();

        // Respond with a success message
        res.json({ success: true, message: "Students assigned to mentor successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});



// Endpoint to get all students for a particular mentor
mentorsRouter.get("/students/:mentorId", async (req, res) => {
    try {
        // Extract mentorId from the request parameters
        const { mentorId } = req.params;

        // Convert mentorId to MongoDB ObjectId
        const mentorObjectId = new mongoose.Types.ObjectId(mentorId);

        // Check if mentorId is in valid ObjectId format
        if (!mentorObjectId) {
            return res.status(400).json({ success: false, message: 'Invalid mentorId format' });
        }

        // Find the mentor in the database
        const mentor = await Mentor.findById(mentorObjectId);

        // If mentor not found, respond with a 404 status
        if (!mentor) {
            return res.status(404).json({ success: false, message: "Mentor not found." });
        }

        // Find all students associated with the mentor
        const students = await Student.find({ mentorId: mentorObjectId });

        // Respond with the list of students
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


module.exports = mentorsRouter;

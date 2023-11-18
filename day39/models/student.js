const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: Number
    },
  name: {
    type: String,
    required: true,
  },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor", 
    default: null,
  },
  previousMentors: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
    },
]
},
{ versionKey: false });

module.exports = mongoose.model("Student", studentSchema, "students");

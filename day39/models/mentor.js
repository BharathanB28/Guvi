const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    id: {
        type: Number
    },
  name: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student", 
    },
  ],
},
{ versionKey: false });

module.exports = mongoose.model("Mentor", mentorSchema, "mentors");

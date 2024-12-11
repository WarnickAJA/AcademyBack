const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  socialLinks: {
    linkedin: { type: String, default: "" },
    website: { type: String, default: "" },
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Agrega esta referencia
    },
  ],
});

module.exports = mongoose.model("Instructor", instructorSchema);

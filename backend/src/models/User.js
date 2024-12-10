const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  myCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  like: {
    type: Boolean,
    default: false,
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    trim: true,
    default: ''
  },
  expertise: {
    type: [String],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  socialLinks: {
    linkedin: { type: String, default: '' },
    website: { type: String, default: '' }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Instructor', instructorSchema);

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Marketing", "Programación", "Diseño", "Otros"], // Puedes agregar más categorías
    required: true,
  },
  subcategory: String,
  duration: {
    type: Number, // En horas o semanas
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencia a la colección de usuarios
  },
  startDate: Date,
  endDate: Date,
  status: {
    type: String,
    enum: ["active", "inactive", "upcoming"],
    default: "active",
  },
  //requirements: [String],
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  image: String, // URL de la imagen
  video: String, // URL del video
  //   modules: [{
  //     name: String,
  //     description: String,
  playlist: [
    {
      name: String,
      url: String, // Puedes almacenar diferentes tipos de contenido (texto, video, etc.)
      // Duración en minutos
    },
  ],
  //   }],
  //   reviews: [{
  //     user: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'User'
  //     },
  //     rating: Number,
  //     comment: String
  //   }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Course", courseSchema);

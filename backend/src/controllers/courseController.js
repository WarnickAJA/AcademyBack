const Course = require("../models/Course");

// Crear un curso
const createCourse = async (courseData) => {
  const newCourse = new Course(courseData);
  return await newCourse.save();
};

// Obtener todos los cursos
const getCourses = async () => {
  Course.updateMany(
    {},
    {
      $set: {
        image:
          "https://yt3.googleusercontent.com/bDisn8rCsbvMyZPmrlVO_C20TdWzagUXjRV71AHfnFsNS5WU6rp1nIQRzF_y7zSWCtSBZehY=s160-c-k-c0x00ffffff-no-rj",
      },
    }
  )
    .then((result) => {
      console.log("Documentos actualizados con un nuevo campo vacío:", result);
    })
    .catch((error) => {
      console.error("Error al actualizar documentos:", error);
    });
  return await Course.find();
  //return await Course.find().populate('instructor', 'name email'); // Poblamos instructor
};

// Obtener un curso por ID
const getCourseById = async (id) => {
  return await Course.findById(id);
  //return await Course.findById(id).populate('instructor', 'name email');
};

// Actualizar un curso
const updateCourse = async (id, updatedData) => {
  return await Course.findByIdAndUpdate(id, updatedData, { new: true });
};

// Eliminar un curso
const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};

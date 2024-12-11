const Course = require("../models/Course");

// Crear un curso
const createCourse = async (courseData) => {
  const newCourse = new Course(courseData);
  return await newCourse.save();
};

// Obtener todos los cursos
const getCourses = async () => {
  // Course.updateMany(
  //   {},
  //   {
  //     $set: {
  //       likes: 0,
  //     },
  //   }
  // )
  //   .then((result) => {
  //     console.log("Documentos actualizados con un nuevo campo vacío:", result);
  //   })
  //   .catch((error) => {
  //     console.error("Error al actualizar documentos:", error);
  //   });
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

const addVideoToPlaylist = async (courseId, video) => {
  return await Course.findByIdAndUpdate(
    courseId,
    { $push: { playlist: video } },
    { new: true }
  );
};

const removeVideoFromPlaylist = async (courseId, videoUrl) => {
  return await Course.findByIdAndUpdate(
    courseId,
    { $pull: { playlist: { url: videoUrl } } }, // Usar la URL para identificar el video
    { new: true }
  );
};
const updateLikes = async (id, newLikes) => {
  return await Course.findByIdAndUpdate(
    id,
    { likes: newLikes }, // Establece los likes al nuevo valor
    { new: true } // Devuelve el documento actualizado
  );
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  updateLikes,
};

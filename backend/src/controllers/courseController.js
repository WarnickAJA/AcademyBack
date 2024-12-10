const Course = require("../models/Course");

// Crear un curso
const createCourse = async (courseData) => {
  const newCourse = new Course(courseData);
  return await newCourse.save();
};

// Obtener todos los cursos
const getCourses = async () => {
  Courses.updateMany(
    {},
    {
      $set: {
        playlist: [
          {
            name: "Top 3 Cursos de Programación en Español y GRATIS",
            url: "https://www.youtube.com/watch?v=acuU_LRH094",
          },
          {
            name: "Fundamentos de programación para principiantes desde cero",
            url: "https://www.youtube.com/playlist?list=PLmIB7uA74VvawrhX2PI8klvIv-OMZsM4y",
          },
          {
            name: "Curso de PROGRAMACIÓN DESDE CERO | Crea tus PRIMEROS PROGRAMAS",
            url: "https://www.youtube.com/playlist?list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu",
          },
        ],
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

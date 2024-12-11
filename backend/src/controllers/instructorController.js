const Instructor = require("../models/Instructor");

// Crear un instructor
const createInstructor = async (instructorData) => {
  const newInstructor = new Instructor(instructorData);
  return await newInstructor.save();
};

// Obtener todos los instructores
const getInstructors = async () => {
  return await Instructor.find();
};

// Obtener un instructor por ID
const getInstructorById = async (id) => {
  return await Instructor.findById(id);
};

// Actualizar un instructor
const updateInstructor = async (id, updatedData) => {
  return await Instructor.findByIdAndUpdate(id, updatedData, { new: true });
};

// Eliminar un instructor
const deleteInstructor = async (id) => {
  return await Instructor.findByIdAndDelete(id);
};

const addCourseToInstructor = async (instructorId, courseId) => {
  const instructor = await Instructor.findById(instructorId);

  if (!instructor) {
    throw new Error("Instructor no encontrado.");
  }

  // Verifica si el curso ya está asociado al instructor
  if (!instructor.courses.includes(courseId)) {
    instructor.courses.push(courseId);
    await instructor.save();
  }

  return instructor; // Devuelve el instructor actualizado
};

module.exports = {
  createInstructor,
  getInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor,
  addCourseToInstructor,
};

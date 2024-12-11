const courseController = require("../controllers/courseController");

// Crear un curso
const createCourseHandler = async (req, res, next) => {
  try {
    const {
      name,
      description,
      category,
      subcategory,
      duration,
      price,
      likes,
      instructor,
      startDate,
      endDate,
      status,
      level,
      image,
      video,
      playlist,
    } = req.body;

    // Validación básica (puedes añadir más reglas si es necesario)
    if (!name || !category || !instructor) {
      const error = new Error("Faltan campos obligatorios.");
      res.status(400); // Configura el código de estado
      return next(error); // Pasa el error al middleware
    }

    // Enviar los datos al controlador
    const newCourse = await courseController.createCourse({
      name,
      description,
      category,
      subcategory,
      duration,
      price,
      likes,
      instructor,
      startDate,
      endDate,
      status,
      level,
      image,
      video,
      playlist,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    next(error);
  }
};

// Obtener todos los cursos
const getCoursesHandler = async (req, res, next) => {
  try {
    const courses = await courseController.getCourses();
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

// Obtener un curso por ID
const getCourseByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await courseController.getCourseById(id);

    if (!course) {
      return res.status(404).json({ error: "Curso no encontrado." });
    }

    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};

// Actualizar un curso
const updateCourseHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCourse = await courseController.updateCourse(id, updatedData);

    if (!updatedCourse) {
      return res.status(404).json({ error: "Curso no encontrado." });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

// Eliminar un curso
const deleteCourseHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCourse = await courseController.deleteCourse(id);

    if (!deletedCourse) {
      return res.status(404).json({ error: "Curso no encontrado." });
    }

    res.status(200).json({ message: "Curso eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCourseHandler,
  getCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
};

const express = require("express");
const router = express.Router();
const {
  createCourseHandler,
  getCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
  addVideoToPlaylistHandler,
  removeVideoFromPlaylistHandler,
  updateLikesHandler,
} = require("../handlers/courseHandler");

router.post("/", createCourseHandler);
router.get("/", getCoursesHandler);
router.get("/:id", getCourseByIdHandler);
router.put("/:id", updateCourseHandler);
router.delete("/:id", deleteCourseHandler);
router.post("/:id/playlist", addVideoToPlaylistHandler); // Agregar video
router.delete("/:id/playlist", removeVideoFromPlaylistHandler); // Eliminar video por URL
// Ruta para actualizar los likes de un curso
router.patch("/:id/likes", updateLikesHandler); // Usa PATCH para una actualización parcial
module.exports = router;

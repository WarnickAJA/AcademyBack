const express = require("express");
const {
  createPostHandler,
  getPostsByCourseIdHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
} = require("../handlers/postHandlers");

const router = express.Router();

// Ruta para crear un nuevo post
router.post("/", createPostHandler);

// Ruta para obtener todos los posts de un curso específico
router.get("/course/:courseId", getPostsByCourseIdHandler);

// Ruta para obtener un post por ID
router.get("/:id", getPostByIdHandler);

// Ruta para actualizar un post
router.patch("/:id", updatePostHandler);

// Ruta para eliminar un post
router.delete("/:id", deletePostHandler);

module.exports = router;

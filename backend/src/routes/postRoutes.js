const express = require("express");
const {
  createPostHandler,
  getPostsHandler,
  getPostsByCourseIdHandler,
  getPostsByUserIdHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
} = require("../handlers/postHandler");

const router = express.Router();

// Ruta para crear un nuevo post
router.post("/", createPostHandler);
router.get("/", getPostsHandler);

// Ruta para obtener todos los posts de un curso específico
router.get("/course/:courseId", getPostsByCourseIdHandler);
router.get("/user/:userId", getPostsByUserIdHandler);

// Ruta para obtener un post por ID
router.get("/:id", getPostByIdHandler);

// Ruta para actualizar un post
router.patch("/:id", updatePostHandler);

// Ruta para eliminar un post
router.delete("/:id", deletePostHandler);

module.exports = router;

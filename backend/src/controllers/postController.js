const Post = require("../models/Post");

// Crear un nuevo post
const createPost = async (postData) => {
  const newPost = new Post(postData);
  return await newPost.save();
};

// Obtener todos los posts de un curso específico
const getPostsByCourseId = async (courseId) => {
  return await Post.find({ course: courseId }).populate("author", "name"); // Poblamos el autor si lo deseas
};
const getPostsByUserId = async (userId) => {
  return await Post.find({ author: userId });
};
// Obtener un post por ID
const getPostById = async (id) => {
  return await Post.findById(id).populate("author", "name");
};

// Actualizar un post
const updatePost = async (id, updatedData) => {
  return await Post.findByIdAndUpdate(id, updatedData, { new: true });
};

// Eliminar un post
const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  createPost,
  getPostsByCourseId,
  getPostsByUserId,
  getPostById,
  updatePost,
  deletePost,
};

const postController = require("../controllers/postController");

// Crear un nuevo post
const createPostHandler = async (req, res, next) => {
  try {
    const { content, course, author } = req.body;

    if (!content || !course || !author) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    const newPost = await postController.createPost({
      content,
      course,
      author,
    });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

// Obtener todos los posts de un curso
const getPostsByCourseIdHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const posts = await postController.getPostsByCourseId(courseId);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostsByUserIdHandler = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const posts = await postController.getPostsByCourseId(userId);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// Obtener un post por ID
const getPostByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postController.getPostById(id);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado." });
    }

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Actualizar un post
const updatePostHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedPost = await postController.updatePost(id, updatedData);

    if (!updatedPost) {
      return res.status(404).json({ error: "Post no encontrado." });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

// Eliminar un post
const deletePostHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await postController.deletePost(id);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post no encontrado." });
    }

    res.status(200).json({ message: "Post eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPostHandler,
  getPostsByCourseIdHandler,
  getPostsByUserIdHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
};

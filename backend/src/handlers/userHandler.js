const userController = require("../controllers/userController");

const createUserHandler = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await userController.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsersHandler = async (req, res, next) => {
  try {
    const users = await userController.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserByIdHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userController.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUserHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await userController.updateUser(userId, userData);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUserHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userController.deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const addToArrayFieldHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { field, value } = req.body; // Ejemplo: { field: "myCourses", value: "courseId" }

    if (!["myCourses", "favourites"].includes(field)) {
      return res.status(400).json({ error: "Invalid field" });
    }

    const updatedUser = await userController.addToArrayField(
      userId,
      field,
      value
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  addToArrayFieldHandler,
};

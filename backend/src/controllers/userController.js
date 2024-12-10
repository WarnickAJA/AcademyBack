const User = require("../models/User");

const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};
const getAllUsers = async () => {
  return await User.find();
};
const getUserById = async (id) => {
  return await User.findById(id);
};
const updateUser = async (id, updatedData) => {
  return await User.findByIdAndUpdate(id, updatedData, { new: true });
};
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

const User = require("../models/User");

const createUser = async (userData) => {
  const email = userData.email;
  let user = await User.findOne({ email });

  if (user) {
    return user;
  }
  const newUser = new User(userData);
  return await newUser.save();
};

const getAllUsers = async () => {
  return await User.find().populate("myCourses favourites");
};

const getUserById = async (id) => {
  return await User.findById(id).populate("myCourses favourites");
};

const updateUser = async (id, updatedData) => {
  return await User.findByIdAndUpdate(id, updatedData, { new: true }).populate(
    "myCourses favourites"
  );
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

const addToArrayField = async (id, field, value) => {
  const update = { $push: { [field]: value } };
  return await User.findByIdAndUpdate(id, update, { new: true }).populate(
    "myCourses favourites"
  );
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addToArrayField,
};

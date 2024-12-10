const express = require("express");
const router = express.Router();
const {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandler");

router.post("/", createUserHandler);
router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

module.exports = router;

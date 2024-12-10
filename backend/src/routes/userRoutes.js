const express = require("express");
const router = express.Router();
const {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  addToArrayFieldHandler,
} = require("../handlers/userHandler");

router.post("/", createUserHandler);
router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);
router.put("/add/:id", addToArrayFieldHandler);

module.exports = router;

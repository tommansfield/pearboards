const express = require("express");
const router = express.Router();

var userService = require("../services/user.service");

router.get("/", userService.getUsers);
router.delete("/all", userService.deleteAllUsers);
router.get("/:id", userService.getUserById);
router.get("/:id/boards", userService.getUserBoards);
router.post("/", userService.createUser);
router.patch("/:id", userService.updateUser);
router.delete("/:id", userService.deleteUser);

module.exports = router;

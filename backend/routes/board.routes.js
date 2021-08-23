const express = require("express");
const router = express.Router();

var boardService = require("../services/board.service");

router.get("/", boardService.getBoards);
router.delete("/all", boardService.deleteAllBoards);
router.get("/:id", boardService.getBoardById);
router.post("/", boardService.createBoard);
router.patch("/:id", boardService.updateBoard);
router.delete("/:id", boardService.deleteBoard);

module.exports = router;

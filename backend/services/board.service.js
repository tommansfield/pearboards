var Board = require("../models/board");

exports.getBoards = (_, res) => {
  Board.find({}, (err, boards) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(boards);
    }
  });
};

exports.getBoardById = (req, res, next) => {
  Board.findById(req.params.id, (err, board) => {
    if (!board) {
      if (!err) {
        err = {
          status: 404,
          message: `No Board found with id: ${req.params.id}`,
        };
      }
      next(err);
    } else {
      res.status(200).send(board);
    }
  });
};

exports.createBoard = (req, res, next) => {
  const board = new Board(req.body);
  board.save((err, board) => {
    if (err) {
      next(err);
    } else {
      res.status(201).send(board);
    }
  });
};

exports.updateBoard = (req, res, next) => {
  Board.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, board) => {
      if (!board) {
        if (!err) {
          err = {
            status: 404,
            message: `No Board found with id: ${req.params.id}`,
          };
        }
        next(err);
      } else {
        res.status(200).send(board);
      }
    }
  );
};

exports.deleteBoard = (req, res, next) => {
  Board.findByIdAndRemove(req.params.id, (err, board) => {
    if (!board) {
      if (!err) {
        err = {
          status: 404,
          message: `No Board found with id: ${req.params.id}`,
        };
      }
      next(err);
    } else {
      res.status(200).send(board);
    }
  });
};

exports.deleteAllBoards = (_, res, next) => {
  Board.deleteMany({}, (err, doc) => {
    if (err) {
      next(err);
    } else {
      const message =
        doc.deletedCount > 0
          ? `Successfully removed ${doc.deletedCount} boards`
          : "No boards to remove";
      res.status(200).json({
        status: 200,
        message: message,
      });
    }
  });
};

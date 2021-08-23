const User = require("../models/user");
var Board = require("../models/board");

exports.getUsers = (_, res) => {
  User.find({}, (err, users) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(users);
    }
  });
};

exports.getUserById = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (!user) {
      if (!err) {
        err = {
          status: 404,
          message: `No user found with id: ${req.params.id}`,
        };
      }
      next(err);
    } else {
      res.status(200).send(user);
    }
  });
};

exports.getUserBoards = (req, res, next) => {
  Board.find({ user: req.params.id }, (err, boards) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(boards);
    }
  });
};

exports.createUser = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      next(err);
    } else {
      res.status(201).send(user);
    }
  });
};

exports.updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (!user) {
        if (!err) {
          err = {
            status: 404,
            message: `No user found with id: ${req.params.id}`,
          };
        }
        next(err);
      } else {
        res.status(200).send(user);
      }
    }
  );
};

exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (!user) {
      if (!err) {
        err = {
          status: 404,
          message: `No user found with id: ${req.params.id}`,
        };
      }
      next(err);
    } else {
      user.remove();
      res.status(200).send(user);
    }
  });
};

exports.deleteAllUsers = (_, res, next) => {
  User.deleteMany({}, (err, doc) => {
    if (err) {
      next(err);
    } else {
      const message =
        doc.deletedCount > 0
          ? `Successfully removed ${doc.deletedCount} users`
          : "No users to remove";
      res.status(200).json({
        status: 200,
        message: message,
      });
    }
  });
};

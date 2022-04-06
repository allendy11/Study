const { User: UserModel, Comment: CommentModel } = require("../models");

module.exports = {
  addUser: (req, res) => {
    UserModel.findOrCreate({
      where: {
        username: req.body.username,
      },
      default: {},
    }).then(([result, created]) => {
      if (created) {
        res.json({ id: result.id, username: result.username });
      } else {
        res.json({ id: result.id, username: result.username });
      }
    });
  },
  getComments: (req, res) => {
    CommentModel.findAll().then((result) => {
      res.status(200).json(result);
    });
  },
  postComment: (req, res) => {
    // comment, username -> user_id 찾아야함
    UserModel.findOne({
      where: {
        username: req.body.username,
      },
    }).then((user) => {
      if (user) {
        CommentModel.create({
          comment: req.body.comment,
          user_id: user.id,
        });
        res.status(201).send("post complete");
      } else {
        res.status(401).send("user not found");
      }
    });
  },
  getUserComments: (req, res) => {
    CommentModel.findAll({
      where: {
        user_id: req.params.id,
      },
    }).then((data) => {
      const result = data.map((el) => {
        return { id: el.id, comment: el.comment, date: el.updatedAt };
      });
      res.json(result);
    });
  },
};

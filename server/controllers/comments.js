const { Comment } = require("../models");

module.exports = {
  listAction: async (req, res) => {
    try {
      const postId = req.params.postId;
      const comments = await Comment.findAll({ where: { PostId: postId } });
      res.json(comments);
    } catch (error) {
      console.log(error);
    }
  },
  createAction: async (req, res) => {
    try {
      const comment = req.body;
      await Comment.create(comment);
      res.json(comment);
    } catch (error) {
      console.log(error);
    }
  },
};

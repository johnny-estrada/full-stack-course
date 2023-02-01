const { Post } = require("../models");

module.exports = {
  listAction: async function (req, res) {
    try {
      const listOfPosts = await Post.findAll();
      res.json(listOfPosts);
    } catch (error) {
      console.log(error);
    }
  },
  detailAction: async function detailAction(req, res) {
    try {
      const id = req.params.id;
      const post = await Post.findByPk(id);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
  createAction: async function createAction(req, res) {
    try {
      const post = req.body;
      await Post.create(post);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
};

const { Posts } = require("../models");

module.exports = {
  listAction: async function (req, res) {
    try {
      const listOfPosts = await Posts.findAll();
      res.json(listOfPosts);
    } catch (error) {
      console.log(error);
    }
  },
  detailAction: async function detailAction(req, res) {
    try {
      const id = req.params.id;
      const post = await Posts.findByPk(id);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
  createAction: async function createAction(req, res) {
    try {
      const post = req.body;
      await Posts.create(post);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
};

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

router.get("/:postId", commentController.listAction);

router.post("/", commentController.createAction)

module.exports = router

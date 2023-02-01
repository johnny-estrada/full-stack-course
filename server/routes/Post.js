const express = require("express");
const router = express.Router();

const postController = require("../controller/Posts");

router.get("/", postController.listAction);

router.get("/byId/:id", postController.detailAction);

router.post("/", postController.createAction);

module.exports = router;

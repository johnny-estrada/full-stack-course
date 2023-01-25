const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    const listOfPosts = await postMessage.findAll()
    res.json(listOfPosts)
})

router.post('/', async (req, res) => {
    const post = req.body;
    await postMessage.create(post)
    res.json(post)
})

module.exports = router;
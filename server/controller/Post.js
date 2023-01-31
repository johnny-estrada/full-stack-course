const {Posts} = require('../models')
// Merge the View and the Model

// export function async listAction(req, res) => {

// }

module.exports = async function listAction(req, res) {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
}

module.exports = async function detailAction(req, res) {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
}

module.exports = async function createAction(req, res) {
    const post = req.body;
    await Posts.create(post)
    res.json(post)
}
const express = require('express');
const router = express.Router();
const listAction = require('../controller/Post')
const detailAction = require('../controller/Post')
const createAction = require('../controller/Post')

router.get('/', listAction)

router.get('/byId/:id', detailAction)

router.post('/', createAction)

module.exports = router;
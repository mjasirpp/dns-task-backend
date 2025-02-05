const express = require('express')
const router = new express.Router()

const menuController = require('../controllers/menuController.js')

//create menu api
router.post('/createMenu',menuController.create)

module.exports = router
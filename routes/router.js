const express = require('express')
const router = new express.Router()

const menuController = require('../controllers/menuController.js')
const menuItemController = require('../controllers/menuItemController.js')

router.post('/menu',menuController.createMenu)
router.get('/menu',menuController.getAllMenu)

router.post('/menu/:menuId/items',menuItemController.createMenuItems)
router.get('/menu/:menuId/items',menuItemController.getMenuItems)

module.exports = router
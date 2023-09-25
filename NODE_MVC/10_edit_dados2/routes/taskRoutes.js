const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)       
router.post('/add', TaskController.createTaskSave)       
router.post('/remove', TaskController.removeTask)       
router.get('/edit/:id', TaskController.editTask)  //get pois trabalha com a URL
router.post('/edit', TaskController.updateTask)  //get pois trabalha com a URL
router.get('/', TaskController.showTasks)

module.exports = router 
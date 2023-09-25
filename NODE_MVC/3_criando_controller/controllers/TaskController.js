const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(req,res){
        return res.render('tasks/create')
    }
    static showTasks(req,res){
        return res.render('tasks/all')
    }
}
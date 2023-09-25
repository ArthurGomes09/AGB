const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(req,res){
        return res.render('tasks/create')
    }
    static async createTaskSave(req,res){
        const task = {
        title: req.body.title,
        description: req.body.description,
        done: false
        }
            //Valida os dados
            //trata os dados
        await Task.create(task)        
        return res.redirect('/tasks')
    }
    static showTasks(req,res){
        return res.render('tasks/all')
    }
}
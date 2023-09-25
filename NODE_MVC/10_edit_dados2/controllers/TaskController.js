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
    static async removeTask(req,res){
        const id = req.body.id
        await Task.destroy({where:{id: id}});
        return res.redirect('/tasks')
    }
    static async editTask(req,res){
        const id = req.params.id
        const task = await Task.findOne({raw:true, where:{id: id}});
        console.log(task)
        // return res.status(201).json({})
        return res.render('tasks/edit', {task})
    }
    static async updateTask(req,res){
        const id = req.body.id
        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task,{where:{ id: id}})
        return res.redirect('/tasks')
    }
    static async showTasks(req,res){
        const tasks = await Task.findAll({raw:true})
        // console.log(task)
        return res.render('tasks/all', {tasks})
    };
};
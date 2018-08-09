import express = require("express");

var taskRoutes = express.Router()

var task = require('./task')

//get all tasks in the db
taskRoutes.route('/all').get(function(req, res, next) {
    task.find(function (err: any, tasks: any) {
        if (err) {
            return next(new Error(err))
        }

        res.json(tasks)
    })
})

//create a task item
taskRoutes.route('/add').post(function (req, res) {
    task.create(
        {
            name: req.body.name,
            deadline: req.body.deadline,
            done: false
           
        },
        function (error: any, task: any) {
            if (error) {
                res.status(400).send('user')
            }
            res.status(200).json(task)
        }
    )
})

//delete a task item

taskRoutes.route('/delete/:id').get(function (req, res, next){
    var id = req.params.id
    task.findByIdAndRemove(id, function (err: any, task: any){
        if(err){
            return next (new Error('Task was not found'))
        }
        res.json('TAsk has been remove successully')
    })
})

//update task item
taskRoutes.route('/update/:id').post(function (req, res, next){
    var id = req.params.id
    task.findByIdAndRemove(id, function (err: any, task:any){
        if(err){
            return next(new Error('Task was not found'))
        } else {
            task.name = req.body.name,
            task.dedline = req.body.deadline,
            task.done = req.body.done

            task.save({
                function (error:any, task:any){
                    if(error){
                        res.status(400).send('Unable to update task')
                    } else {
                        res.status(200).json(task)
                    }
                }
            })
        }
    })
})

module.exports = taskRoutes
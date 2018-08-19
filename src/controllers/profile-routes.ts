var router = require('express').Router();
import { Request, Response, Router } from "express";
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");

var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);


// interface taskInterface{
//   name:String;
//   done:Boolean;
//   deadline:Date;
//   users:[Array]
// }

interface userInterface{
  username:String;
  googleId:String;
}

//check if user is logged in
const authCheck = (req, res, next) => {
  if (!req.user) {// if user is not logged in
    res.redirect('auth/login');
  } else {
    next();
  }
};
export let newTask = (req, res) => {
  Task.find({userId: req.user.googleId}, (err, task) =>{
    res.render("formTask", {
      tasks: task
    })
  });
};


export let editTask = (req, res) => {
  Task.find({ _id: req.params.id }, (err, task) => {
    res.render("editTask", {
      tasks: task
    })
  });
};


export let newTaskPost = (req, res) => {
  if (req.body.myInput === '') {
    alert("You have to write something");
  }
  else {
    let newTask = new Task({
      name: req.body.myInput,
      done: false,
      deadline: new Date(),
      userId: req.user.googleId
    });
    newTask.save();
    // Task.findOne({ user: req.params.user }, (err, task)=> {
    //   // task.users.push(newTask);
    //   task.save();
    // });
  }
  return res.redirect('/profile');
};



export let newEditPost = (req, res) => {
  if (req.body.editInput === '') { }
  else {
    console.log(req.params.id);
    Task.update({ _id: req.params.id },
      {
        name: req.body.editInput,
        done: false,
        deadline: new Date(),
        userId: req.user.googleId
        // users: req.params.user
      }, (err, docs) => {
        return res.redirect('/profile');
        // Task.update({ googleId: req.user.googleId, "user.googleId": req.params.name },
        //  { $set: { "user.$.googleId": req.body.editInput } }, (err, result)=> { })
      })
  }
  
}


export let deleteTask = (req, res) => {
  Task.remove({ _id: req.params.id }, (err) =>{
    return res.redirect('/profile');
  })
  
};

router.get('/', authCheck, newTask);
router.post('/', authCheck, newTaskPost);
router.get('/edit/:id', editTask);
router.post('/edit/:id', newEditPost);
router.get('/edit/:id/delete', deleteTask);

module.exports = router;

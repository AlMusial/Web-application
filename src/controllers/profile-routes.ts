var router = require('express').Router();
import { Request, Response, Router } from "express";
import { updateExpression } from "../../node_modules/@types/babel-types";
var interfaces = require("./interfaces");
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");

var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);



//check if user is logged in
const authCheck = (req, res, next) => {
  if (!req.user) {// if user is not logged in
    res.redirect('auth/login');
  } else {
    next();
  }
};


export let newTask = (req, res) => {
  Task.find({ userId: req.user.googleId }, (err, task) => {
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
  new Promise((resolve, reject) =>{
    if (req.body.myInput === '') {}
    else {
      let newTask = new Task({
        name: req.body.myInput,
        done: false,
        deadline: new Date(),
        userId: req.user.googleId
      });
      resolve(newTask.save());
    }
  }).then(()=>{
    return res.redirect('/profile');
  })
};



export let newEditPost = (req, res) => {

  new Promise((resolve) => {
    if (req.body.editInput === '') { }
    else {
      resolve(Task.update({ _id: req.params.id },
        {
          name: req.body.editInput,
          done: false,
          deadline: new Date(),
          userId: req.user.googleId
        }))
    }
  }).then(() => {
    return res.redirect('/profile');
  })
}



export let deleteTask = (req, res) => {
  new Promise((resolve)=>{
    resolve(Task.remove({ _id: req.params.id }))
  }).then
    return res.redirect('/profile');

};

router.get('/', authCheck, newTask);
router.post('/', authCheck, newTaskPost);
router.get('/edit/:id', authCheck, editTask);
router.post('/edit/:id', authCheck, newEditPost);
router.get('/edit/delete/:id', authCheck, deleteTask);

module.exports = router;

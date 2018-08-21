var router = require('express').Router();
var path =require('path');
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");

var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);

export let index = (req, res) => {
  res.render("home", {
    title: "Home",
  });
};
export let errorPage = (req, res) => {
  res.render("error", {
    title: "Error",
  });
};

router.get("/getTasks", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Task.find({ userId: req.user.googleId }).then((task) => {
        res.send(task);
    });
    
});

router.post("/addNewTask", (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let newTask = new Task({
        name: req.body.taskName,
        done: false,
        deadline: new Date(),
        userId: req.user.googleId
      });
       newTask.save().then(() => {
        res.send(JSON.stringify({status: true}));
      }).catch((err)=>{
        res.send(JSON.stringify({status: false}));
      });
});

module.exports = router;
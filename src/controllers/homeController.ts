import { Request, Response, Router } from "express";
var path =require('path');
var email: any;
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");


//mapping (connecting collection created in mongoDB with schema in file task.ts)
//'task'-name of collection which is replaced in taskSchema(static membership)
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);

export let index = (req: Request, res: Response) => {
  res.render("page-a", {
    title: "Home",
  });
};

export let about = (req: Request, res: Response) => {
  res.render("page-b", {
    title:"About"
    
  });
};

export let newTask = (req: Request, res: Response) => {
  Task.find({}, function (err: any, task: any){
  res.render("formTask", {
    tasks:task})
  });
};

export let editTask = (req: Request, res: Response) => {
  Task.find({name:'gaming'}, function (err: any, task: any){
  res.render("editTask", {
    tasks:task})
  });
};


export let newTaskPost = (req: Request, res: Response) => {
  if(req.body.myInput===''){
    alert("You have to write something");
  }
  else{
  let newTask = new Task({
      name: req.body.myInput,
      done: false,
      deadline: new Date()
  });
  newTask.save();
}
  return res.redirect('back');
};

export let newEditPost = (req: Request, res: Response) => {
  if(req.body.myInput===''){
    alert("You have to write something");
  }
  else{
  let newTask = new Task({
      name: req.body.myInput,
      done: false,
      deadline: new Date()
  });
  newTask.save();
}
  return res.redirect('back');
}


let newUserr = new User({
  email:'s@s',
  password: "sadas"
});

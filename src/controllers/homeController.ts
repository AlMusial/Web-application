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
  res.render("home", {
    title: "Home",
  });
};

export let newUser = (req: Request, res: Response) => {
  User.find().byNotDone().exec(function (err: any, user: any) {
    res.render("formUser", { users: user });
  })
}

export let newTask = (req: Request, res: Response) => {
  Task.find({}, function (err: any, task: any){
  res.render("formTask", {
    tasks:task})
  });
};

export let editTask = (req: Request, res: Response) => {
  Task.find({name: req.params.name}, function (err: any, task: any){
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


export let newUserPost = (req: Request, res: Response) => {
  if ((req.body.emailUser === '') || (req.body.passwordUser === '')) { }
  else {
    let newUser = new User({
      email: req.body.emailUser,
      password: req.body.passwordUser
    });
    newUser.save();
  }
  return res.redirect('back');
}

export let newEditPost = (req: Request, res: Response) => {
  if(req.body.editInput === ''){}
  else{
    Task.update({ name: req.params.name },
      {
        name: req.body.editInput,
        done: false,
        deadline: new Date
      }, function (err: any, docs: any) {
        if (err) res.json(err);
      })
      return res.redirect('/add');
  }

}

export let deleteTask = (req: Request, res:Response) => {
  Task.remove({name: req.params.name},function(err:any){
    if(err) res.json(err)
  })
  return res.redirect('/add');
};

let newUserr = new User({
  email:'s@s',
  password: "sadas"
});

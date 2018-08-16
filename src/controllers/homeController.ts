import { Request, Response, Router } from "express";
var path =require('path');
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

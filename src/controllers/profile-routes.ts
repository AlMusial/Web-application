var router = require('express').Router();
import { Request, Response, Router } from "express";
import * as homeController from "./homeController";
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");


//mapping (connecting collection created in mongoDB with schema in file task.ts)
//'task'-name of collection which is replaced in taskSchema(static membership)
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);

//check if user is logged in
 const authCheck= (req: any, res: any, next: any) =>{
    if(!req.user){// if user is not logged in
         res.redirect('auth/login');
     }else{
       next();
        
         //should be only -next();
    }
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


export let newTaskPost = (req: Request, res: Response, push: any, user: any) => {
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
  //user = req.user;
  push(newTask);
}
  return res.redirect('back');
};


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


        router.get('/',authCheck, newTask);
        router.post('/',authCheck, newTaskPost);
        router.get('/edit/:name',editTask);
        router.get('/',editTask);
        router.post('/edit/:name',newEditPost);
        router.get('/',deleteTask);
        router.get('/edit/:name/delete',deleteTask);

 module.exports = router;
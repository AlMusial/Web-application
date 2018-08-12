import { Request, Response } from "express";
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
export let basic = (req: Request, res: Response) => {
  res.render("page-c", {
    title:"message",
    randomText: req.query.text
  });
};
export let newUser = (req: Request, res: Response) => {
  res.render("formTask", {
    title:"create new User",
     tasks : req.query.text
  });
}

mongoose.connect('mongodb://localhost/TODO', { // Connecting to db
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
});
Task.find().byNotDone().exec(function (err: any, task: any) {
  tasks: task
});

User.find().byNotDone().exec(function (err: any, user: any) {
  console.log(user);
});
// create new obiect

let newTask = new Task({
  name: '',
  done: false,
  deadline: new Date()
});

let newUserr = new User({
  email:'kupa@s',
  password: "sadas"
});
// save
newTask.save();
newUserr.save();
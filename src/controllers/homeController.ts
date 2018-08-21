var router = require('express').Router();
var path =require('path');
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");

//mapping (connecting collection created in mongoDB with schema in file task.ts)
//'task'-name of collection which is replaced in taskSchema(static membership)
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

router.get('/',index);
router.get('/error', errorPage);
module.exports = router;
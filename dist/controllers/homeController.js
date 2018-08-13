"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var email;
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");
//mapping (connecting collection created in mongoDB with schema in file task.ts)
//'task'-name of collection which is replaced in taskSchema(static membership)
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);
exports.index = (req, res) => {
    res.render("page-a", {
        title: "Home",
    });
};
exports.about = (req, res) => {
    res.render("page-b", {
        title: "About"
    });
};
exports.basic = (req, res) => {
    res.render("page-c", {
        title: "message",
        randomText: req.query.text
    });
};
exports.newTask = (req, res) => {
    Task.find().byNotDone().exec(function (err, task) {
        res.render("formTask", { tasks: task });
    });
};
// create new obiect
exports.newUserPost = (req, res) => {
    if (req.body.myInput === '') {
        alert("You must write something!");
    }
    else {
        let newTask = new Task({
            name: req.body.myInput,
            done: false,
            deadline: new Date()
        });
        newTask.save();
    }
    return res.redirect('back');
};
let newUserr = new User({
    email: 's@s',
    password: "sadas"
});
//newUserr.save();
//# sourceMappingURL=homeController.js.map
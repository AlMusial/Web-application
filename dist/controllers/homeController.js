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
    res.render("home", {
        title: "Home",
    });
};
exports.newUser = (req, res) => {
    User.find().byNotDone().exec(function (err, user) {
        res.render("formUser", { users: user });
    });
};
exports.newTask = (req, res) => {
    Task.find({}, function (err, task) {
        res.render("formTask", {
            tasks: task
        });
    });
};
exports.editTask = (req, res) => {
    Task.find({ name: req.params.name }, function (err, task) {
        res.render("editTask", {
            tasks: task
        });
    });
};
exports.newTaskPost = (req, res) => {
    if (req.body.myInput === '') {
        alert("You have to write something");
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
exports.newUserPost = (req, res) => {
    if ((req.body.emailUser === '') || (req.body.passwordUser === '')) { }
    else {
        let newUser = new User({
            email: req.body.emailUser,
            password: req.body.passwordUser
        });
        newUser.save();
    }
    return res.redirect('back');
};
exports.newEditPost = (req, res) => {
    if (req.body.editInput === '') { }
    else {
        Task.update({ name: req.params.name }, {
            name: req.body.editInput,
            done: false,
            deadline: new Date
        }, function (err, docs) {
            if (err)
                res.json(err);
        });
        return res.redirect('/add');
    }
};
exports.deleteTask = (req, res) => {
    Task.remove({ name: req.params.name }, function (err) {
        if (err)
            res.json(err);
    });
    return res.redirect('/add');
};
let newUserr = new User({
    email: 's@s',
    password: "sadas"
});
//# sourceMappingURL=homeController.js.map
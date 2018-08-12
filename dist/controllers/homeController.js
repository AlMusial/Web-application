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
exports.newUser = (req, res) => {
    res.render("formTask", {
        title: "create new User",
        tasks: req.query.text
    });
};
mongoose.connect('mongodb://localhost/TODO', {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
});
Task.find().byNotDone().exec(function (err, task) {
    tasks: task;
});
User.find().byNotDone().exec(function (err, user) {
    console.log(user);
});
// create new obiect
let newTask = new Task({
    name: '',
    done: false,
    deadline: new Date()
});
let newUserr = new User({
    email: 'kupa@s',
    password: "sadas"
});
// save
newTask.save();
newUserr.save();
//# sourceMappingURL=homeController.js.map
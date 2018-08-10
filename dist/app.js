"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const homeController = require("./controllers/homeController");
var mongoose = require('mongoose'); // Adding mongoose 
var app = express();
var taskSchema = require("./db/schemas/task"); // load collection schema from task.ts
var userSchema = require("./db/schemas/user");
////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
///////////////////////////////////////////////////////
app.listen(3000);
app.get('/', homeController.index);
app.get('/message', homeController.basic);
app.get('/About', homeController.about);
app.get('/add', homeController.newUser);
app.set('view engine', 'pug');
app.get('/add', function (sReq, sRes) {
    var email = sReq.query.email;
});
mongoose.connect('mongodb://localhost/TODO', {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
});
// set on debbuger
mongoose.set('debug', true);
//mapping (connecting collection created in mongoDB with schema in file task.ts)
//'task'-name of collection which is replaced in taskSchema(static membership)
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);
//******************************************************************//
Task.find().byNotDone().exec(function (err, task) {
    console.log(task);
});
User.find().byNotDone().exec(function (err, user) {
    console.log(user);
});
let name;
let email;
let password;
// create new obiekt
let newTask = new Task({
    name: name,
    done: false,
    deadline: new Date()
});
let newUser = new User({
    email: email,
    password: "sadas"
});
// save
//newTask.save();
//newUser.save();
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
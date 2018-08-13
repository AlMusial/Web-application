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
app.get('/add', homeController.newTask);
app.post('/add', homeController.newTaskPost);
app.get('/edit', homeController.editTask);
app.get('/edit/:name', homeController.editTask);
app.post('/edit/:name', homeController.newEditPost);
app.get('/edit/:name/delete', homeController.deleteTask);
app.get('/addUser', homeController.newUser);
app.post('/addUser', homeController.newUserPost);
app.set('view engine', 'pug');
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);
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
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
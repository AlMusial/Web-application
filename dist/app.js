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
// set on debbuger
mongoose.set('debug', true);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
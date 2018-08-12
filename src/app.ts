import express = require("express");
import * as homeController from "./controllers/homeController"


var mongoose = require('mongoose'); // Adding mongoose 
var app = express();
var taskSchema = require("./db/schemas/task"); // load collection schema from task.ts
var userSchema = require("./db/schemas/user");
////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
///////////////////////////////////////////////////////
app.listen(3000);
app.get('/', homeController.index);
app.get('/message', homeController.basic);
app.get('/About',homeController.about);
app.get('/add',homeController.newUser);
app.post('/add', homeController.newUserPost);
app.set('view engine', 'pug');

// set on debbuger
mongoose.set('debug', true);

  // export our app
  export default app;
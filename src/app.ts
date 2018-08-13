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
app.get('/add',homeController.newTask);
app.post('/add', homeController.newTaskPost);
app.get('/edit',homeController.editTask);
app.post('/edit',homeController.newTaskPost);
app.get('/edit/:name',homeController.editTask);
app.put('edit/:name',homeController.newEditPut);
app.set('view engine', 'pug');
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);


mongoose.connect('mongodb://localhost/TODO', { // Connecting to db
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
});

// set on debbuger
mongoose.set('debug', true);

  // export our app
  export default app;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const homeController = require("./controllers/homeController");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
var config = require('./config');
var app = express();
var taskRoutes = require('./Routes');
app.use('/api', taskRoutes);
mongoose.connect(config.DB);
// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/')));
// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Database = require("./db/Database");
var mongoData = 'mongodb://localhost:27017/TODO';
var port = config.APP_PORT || 4000;
// Our Express APP config
//const app = express();
//app.set("port", process.env.PORT || 3000);
app.listen(port); // Listen on port defined in config file
console.log('App listening on port ' + port);
//connect to database
//mongoose.connect(mongoData);
Database.connect().then(() => {
    // API Endpoints
    app.get('/', homeController.index);
    app.get('/message', homeController.basic);
    app.get('/About', homeController.about);
    app.set('view engine', 'pug');
}).catch(() => {
    process.exit(1);
});
// Server index.html page when request to the root is made
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
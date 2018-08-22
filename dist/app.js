"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const authRoutes = require("./controllers/auth-routes");
const profileRoutes = require("./controllers/profile-routes");
const homeController = require("./controllers/homeController");
const passportSetup = require("./config/passport-setup");
const ajaxController = require("./controllers/ajaxController");
const cookieSession = require('cookie-session');
const keys = require("./config/keys");
const passport = require('passport');
const path = require("path");
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
const cfgFile = require('./config.json');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000);
app.set('view engine', 'pug');
app.use('/', homeController);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/ajax', ajaxController);
app.get('/js/tasks.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/js/tasks.js'));
});
mongoose.connect(cfgFile.dbHost, {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
});
// set on debbuger
mongoose.set('debug', true);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
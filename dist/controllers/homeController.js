"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('express').Router();
var path = require('path');
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
exports.errorPage = (req, res) => {
    res.render("error", {
        title: "Error",
    });
};
router.get('/', exports.index);
router.get('/error', exports.errorPage);
module.exports = router;
//# sourceMappingURL=homeController.js.map
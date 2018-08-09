"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
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
exports.form = (req, res) => {
    res.render("form", {
        title: "Create new User",
        randomText: req.query.text
    });
};
exports.newTask = (req, res) => {
    res.render("form", {
        title: "create new task",
        randomText: req.query.text
    });
};
//# sourceMappingURL=homeController.js.map
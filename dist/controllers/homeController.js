"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var email;
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
        email: req.query.text
    });
};
//# sourceMappingURL=homeController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var userRoutes = express.Router();
var user = require('./user');
//get all users in the db
userRoutes.route('/all').get(function (req, res, next) {
    user.find(function (err, users) {
        if (err) {
            return next(new Error(err));
        }
        res.json(users);
    });
});
//create a users item
userRoutes.route('/add').post(function (req, res) {
    user.create({
        name: req.body.name,
        deadline: req.body.deadline,
        done: false
    }, function (error, user) {
        if (error) {
            res.status(400).send('Unable to create user list');
        }
        res.status(200).json(user);
    });
});
//delete a user item
userRoutes.route('/delete/:id').get(function (req, res, next) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err, user) {
        if (err) {
            return next(new Error('User was not found'));
        }
        res.json('User has been remove successully');
    });
});
//update user item
userRoutes.route('/update/:id').post(function (req, res, next) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err, user) {
        if (err) {
            return next(new Error('User was not found'));
        }
        else {
            user.name = req.body.name,
                user.dedline = req.body.deadline,
                user.done = req.body.done;
            user.save({
                function(error, user) {
                    if (error) {
                        res.status(400).send('Unable to update user');
                    }
                    else {
                        res.status(200).json(user);
                    }
                }
            });
        }
    });
});
module.exports = userRoutes;
//# sourceMappingURL=userRoutes.js.map
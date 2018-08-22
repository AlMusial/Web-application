var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");
var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);
router.get("/getTasks", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Task.find({ userId: req.user.googleId }).then((task) => {
        res.send(task);
    });
});
router.post("/deleteTask", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return (Task.remove({ _id: req.body.taskId })).then(() => {
        res.send(JSON.stringify({ status: true }));
    }).catch((err) => {
        res.send(JSON.stringify({ status: false }));
    });
});
router.post("/addNewTask", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let newTask = new Task({
        name: req.body.taskName,
        done: false,
        deadline: new Date(),
        userId: req.user.googleId
    });
    newTask.save().then(() => {
        res.send(JSON.stringify({ status: true }));
    }).catch((err) => {
        res.send(JSON.stringify({ status: false }));
    });
});
module.exports = router;
//# sourceMappingURL=ajaxController.js.map
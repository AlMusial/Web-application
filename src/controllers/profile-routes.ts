var router = require('express').Router();
import { Request, Response, Router } from "express";
import * as homeController from "./homeController"
var mongoose = require('mongoose');
var taskSchema = require(".././db/schemas/task");
var userSchema = require(".././db/schemas/user");

var Task = mongoose.model('task', taskSchema);
var User = mongoose.model('user', userSchema);

//check if user is logged in
 const authCheck= (req: any, res: any, next: any) =>{
    if(!req.user){// if user is not logged in
         res.redirect('auth/login');
     }else{
       next();  
    }
 };


router.get('/', authCheck, homeController.newTask);
router.post('/', authCheck, homeController.newTaskPost);
router.get('/edit/:name',homeController.editTask);
router.post('/edit/:name',homeController.newEditPost);
router.get('/edit/:name/delete',homeController.deleteTask);
module.exports = router;

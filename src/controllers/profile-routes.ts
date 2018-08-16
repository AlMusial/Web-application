var router = require('express').Router();
import * as homeController from "./homeController"

//check if user is logged in
// const authCheck= (req: any, res: any) =>{
//     if(!req.user){// if user is not logged in
//         res.redirect('auth/login');
//     }else{
       
//         //should be only -next();
//     }
// };

router.get('/', homeController.newTask);
router.post('/', homeController.newTaskPost);
router.get('/',homeController.editTask);
router.get('/',homeController.editTask);
router.post('/',homeController.newEditPost);
router.get('/',homeController.deleteTask);
module.exports = router;
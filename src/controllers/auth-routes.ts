var router = require('express').Router();
var passport = require('passport');
///auth login
router.get('/login', (req: any, res:any)=>{
  res.render('formSignIn')
});

router.get('/google/redirect', passport.authenticate('google'), (req: any, res: any)=>{
  //res.send(req.user)
  res.redirect('http://localhost:3000/profile#/add');
 })

// auth with google
router.get('/google', passport.authenticate('google', {
  scope:['profile']
}));

// auth logout
router.get('/logout', (req: any, res: any)=>{
  //handle passport
 });

 module.exports = router;


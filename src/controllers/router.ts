const router = require('express').Router();
var passport = require('passport');
///auth login
router.get('/login', (req: any, res:any)=>{
  res.render('formSignIn')
  res.send('login with..')
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope:['profile']
}));

// auth logout
router.get('/logout', (req: any, res: any)=>{
  //handle passport
  res.send('logout')
 });

 module.exports = router;

 router.get('/google/redirect',passport.authenticate('google'), (req: any, res: any)=>{
   res.send('you reached the callback URL')
 })
const router = require('express').Router();
var passport = require('passport');
///auth login
router.get('/login', (req, res) => {
    res.render('formSignIn');
    res.send('login with..');
});
// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
// auth logout
router.get('/logout', (req, res) => {
    //handle passport
    res.send('logout');
});
module.exports = router;
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send(req.user)
    res.redirect('/proile');
});
//# sourceMappingURL=router.js.map
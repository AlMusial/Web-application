var router = require('express').Router();
var passport = require('passport');
const cfgFile = require('../config.json');
///auth login
router.get('/login', (req, res) => {
    res.render('formSignIn');
});
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send(req.user)
    res.redirect(cfgFile.redirectUrl);
});
// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
module.exports = router;
//# sourceMappingURL=auth-routes.js.map
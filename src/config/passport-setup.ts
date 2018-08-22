var passport = require('passport');
var mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
var userSchema = require("../db/schemas/user");
var User = mongoose.model('user', userSchema);


passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(
    new GoogleStrategy({

        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken: any, refreshToken: any, profile, done) => {
        //check if user exists
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
            } else {
               return new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((User) => {
                    console.log('new user created: ' + User);
                    done(null, User);
                }).catch((err,res) =>{
                    return res.redirect('/error')
                });
            }
        });

    })
);
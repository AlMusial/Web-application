var passport = require('passport');
var mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
var userSchema = require("../db/schemas/user");
var User = mongoose.model('user', userSchema);


passport.serializeUser((user: any, done: any) => {
    done(null, user.id)
});

passport.deserializeUser((id: any, done: any) => {
    User.findById(id).then((user: any) => {
        done(null, user);
    });
});


passport.use(
    new GoogleStrategy({

        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken: any, refreshToken: any, profile: any, done: any) => {
        //check if user exists
        User.findOne({ googleId: profile.id }).then((currentUser: any) => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser: any) => {
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
                });
            }
        });

    })
);
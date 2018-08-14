var passport = require('passport');
var mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
var userSchema = require("../db/schemas/user");

var User = mongoose.model('user', userSchema);

passport.use(
    new GoogleStrategy({

        callbackURL:'/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken: any, refreshToken: any, profile: any, done: any) => {
        console.log('my response');
        console.log(profile);
        new User ({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((newUser: any) => {
            console.log('new user created: ' + newUser)
        });
})
);
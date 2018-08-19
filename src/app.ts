import express = require("express");
const authRoutes = require("./controllers/auth-routes");
const profileRoutes = require("./controllers/profile-routes");
const homeController = require("./controllers/homeController");
const passportSetup = require("./config/passport-setup");
const cookieSession = require('cookie-session');
const keys = require("./config/keys");
const passport = require('passport');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

const cfgFile = require('./config.json');


app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.listen(3000); 
app.set('view engine', 'pug');
app.use('/', homeController);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


mongoose.connect(cfgFile.dbHost, { // Connecting to db
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0
});

// set on debbuger
mongoose.set('debug', true);

  // export our app
export default app;
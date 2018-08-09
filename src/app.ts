import express = require("express");
import * as homeController from "./controllers/homeController"
import * as mongoose from "mongoose";

import Database = require("./db/Database")
var mongoData: string ='mongodb://localhost:27017/TODO';
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

//connect to database
//mongoose.connect(mongoData);
Database.connect().then(() =>{
  // API Endpoints
  app.get('/', homeController.index);
  app.get('/message', homeController.basic);
  app.get('/About',homeController.about);
  app.set('view engine', 'pug');

  }).catch(() =>{
    process.exit(1);
  });


// export our app
export default app;



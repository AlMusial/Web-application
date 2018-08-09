"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const homeController = require("./controllers/homeController");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/', homeController.index);
app.get('/message', homeController.basic);
app.get('/About', homeController.about);
app.set('view engine', 'pug');
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var user = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'task'
});
module.exports = mongoose.model('user', user);
//# sourceMappingURL=user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var task = new mongoose.Schema({
    name: {
        type: String
    },
    done: {
        type: Boolean
    },
    deadline: {
        type: Date
    }
}, {
    collection: 'task'
});
module.exports = mongoose.model('task', task);
//# sourceMappingURL=task.js.map
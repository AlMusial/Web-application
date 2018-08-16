var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var taskSchema = require("./task");
var Task = mongoose.model('task', taskSchema);

var userSchema = new Schema ({
    username: String,
    googleId: String,
    tasks: ['taskSchema']
}, {collection: 'user'},{collection: 'task'});


userSchema.query.byNotDone = function() {
   return this;
};


module.exports = userSchema;
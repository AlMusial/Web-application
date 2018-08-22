var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = require("./user");
var User = mongoose.model('user', userSchema);
// mapped object from db
var taskSchema = new Schema({
    name: String,
    deadline: Date,
    done: Boolean,
    userId: String
}, { collection: 'task' }); //static
taskSchema.query.byNotDone = function () {
    return this;
};
var Task = mongoose.model('task', taskSchema);
// export schema to use it in diffrent file
module.exports = taskSchema;
//# sourceMappingURL=task.js.map
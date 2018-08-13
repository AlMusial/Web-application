var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// mapped object from db
var taskSchema = new Schema({
    name: String,
    deadline: Date,
    done: Boolean
}, { collection: 'task' });//static


taskSchema.query.byNotDone = function() {
    return this;
};

// export schema to use it in diffrent file
module.exports = taskSchema;
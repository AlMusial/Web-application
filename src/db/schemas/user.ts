var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    email: String,
    password: String
}, {collection: 'user'});


userSchema.query.byNotDone = function() {
   return this;
};

module.exports = userSchema;
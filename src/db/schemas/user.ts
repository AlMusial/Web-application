var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    username: String,
    googleId: String
}, {collection: 'user'});


userSchema.query.byNotDone = function() {
   return this;
};


module.exports = userSchema;
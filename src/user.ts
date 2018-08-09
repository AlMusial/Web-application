import * as mongoose from "mongoose";

var user = new mongoose.Schema({
    email: {
        type: String
    },

    password: {
        type: String
    }
},
{
    collection: 'task'
}
)

module.exports = mongoose.model('user', user)
import * as mongoose from "mongoose";

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
},
{
    collection: 'task'
}
)

module.exports = mongoose.model('task', task)
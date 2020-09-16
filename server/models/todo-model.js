const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema(
    {
        todo: { type: String},
    },
    { timestamps: true },
)


module.exports = mongoose.model('todos', Todo)
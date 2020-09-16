const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://cocodersima:sima1234@cluster0.xoubr.mongodb.net/todos?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
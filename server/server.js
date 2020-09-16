const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const db = require('./db')
const todoRouter = require('./routes/todo-router')
const app = express()
const apiPort = 3000
mongoose.connect('mongodb+srv://cocodersima:sima1234@cluster0.xoubr.mongodb.net/todos?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to database ');
}); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/', todoRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

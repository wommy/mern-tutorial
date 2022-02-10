const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api/goals/', require('./routes/goalRoutes'))
  .use('/api/users/', require('./routes/userRoutes'))
  .use(errorHandler)
  .listen(port, () => console.log(`server started on port ${port}`))

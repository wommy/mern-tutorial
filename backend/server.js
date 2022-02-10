const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api/goals/', require('./routes/goalRoutes'))
  .use(errorHandler)
  .listen(port, () => console.log(`server started on port ${port}`))

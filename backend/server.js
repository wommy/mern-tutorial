const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api/goals/', require('./routes/goalRoutes'))
  .listen(port, () => console.log(`server started on port ${port}`))

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
  .use('/api/goals/', require('./routes/goalRoutes'))
  .listen(port, () => console.log(`server started on port ${port}`))

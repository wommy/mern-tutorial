const colors = require('colors')
require('dotenv').config()
const { json, urlencoded, static } = require('express')
const App = require('express')()
require('./configDb')()

App
  .use(json())
  .use(urlencoded({ extended: false }))
  .use('/api/goals/', require('./routes/goalRoutes'))
  .use('/api/users/', require('./routes/userRoutes'))

process.env.NODE_ENV === 'production'
  ? App
      .use(static('../frontend/build'))
      .get('*', (_, { sendFile }) =>
        sendFile('../frontend/build/index.html'),
      )
  : App
      .use(({ message, stack }, _req, { json }, _next) => json({
        message,
        stack,
      }))
      .listen(process.env.PORT, () =>
        console.log(`server started on port ${process.env.PORT}`),
      )

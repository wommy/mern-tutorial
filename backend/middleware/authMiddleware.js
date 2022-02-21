module.exports = require('express-async-handler')(
  async ({ user, headers: { authorization } }, { status }, next) => {
    if (authorization.startsWith('Bearer')) {
      try {
        user = await require('../models/userModel')
          .findById(
            require('jsonwebtoken').verify(
              authorization.split(' ')[1],
              process.env.JWT_SECRET,
            ).id,
          )
          .select('-password')
        next()
      } catch (e) {
        console.error(e)
        status(401)
        throw new Error('not authorized')
      }
    }
    status(401)
    throw new Error('not authorized, no token')
  },
)

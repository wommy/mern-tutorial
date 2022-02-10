const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

module.exports = asyncHandler(async (req, res, next) => {
  let token
  const auth = req.headers.authorization
  if (auth && auth.startsWith('Bearer')) {
    try {
      // get token from header
      token = auth.split(' ')[1]

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // get use by token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (e) {
      console.error(e)
      res.status(401)
      throw new Error('not authorized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('not authorized, no token')
  }
})

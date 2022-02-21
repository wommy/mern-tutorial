const { registerUser, loginUser, getMe } = require('../controllers/userController')

module.exports = require('express').Router()
  .post('/', registerUser)
  .post('/login', loginUser)
  .get('/me', require('../middleware/authMiddleware'), getMe)

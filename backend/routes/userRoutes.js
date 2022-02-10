const { registerUser, loginUser, getMe } = require('../controllers/userController')

module.exports = require('express')
  .Router()
  .post('/', registerUser)
  .post('/login', loginUser)
  .get('/me', getMe)

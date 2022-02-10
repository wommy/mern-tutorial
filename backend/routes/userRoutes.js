const { registerUser, loginUser, getMe } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

module.exports = require('express')
  .Router()
  .post('/', registerUser)
  .post('/login', loginUser)
  .get('/me', protect, getMe)

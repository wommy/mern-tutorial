const asyncHandler = require('express-async-handler')

// @desc    register new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'register user' })
})

// @desc    authenticate user
// @route   POST /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'login user' })
})

// @desc    get user data
// @route   GET /api/users/me
// @access  private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'user data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}

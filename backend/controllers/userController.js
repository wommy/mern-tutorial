const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const errFunc = msg => {
  throw new Error(msg)
}
const generateJWT = id =>
  require('jsonwebtoken').sign(id, process.env.JWT_SECRET, { expiresIn: '30d' })

module.exports = {
  registerUser: asyncHandler(async ({ body: { name, email, password } }, { json }) => {
    ;(!name || !email || !password) && errFunc('plz add all fields')
    ;(await User.findOne({ email })) && errFunc('user exists')
    const {
      id: _id,
      name: uName,
      email: uEmail,
      _id: id,
    } = (await User.create({
      name,
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
    }))
      ? json({
          _id,
          name: uName,
          email: uEmail,
          token: generateJWT(id),
        })
      : errFunc('invalid user data')
  }),
  loginUser: asyncHandler(async ({ body: { email, password } }, { json }) => {
    const {
      id: _id,
      name,
      email: uEmail,
      password: uPassword,
      _id: id,
    } = (await User.findOne(email)) && (await bcrypt.compare(password, uPassword))
      ? json({
          _id,
          name,
          email: uEmail,
          token: generateJWT(id),
        })
      : errFunc('invalid credentials')
  }),
  getMe: asyncHandler(async ({ user }, { json }) => json(user)),
}

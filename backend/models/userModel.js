const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'plz add name'],
    },
    email: {
      type: String,
      required: [true, 'plz add email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'plz add password'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', userSchema)

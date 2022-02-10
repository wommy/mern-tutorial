const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'plz add txt'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Goal', goalSchema)

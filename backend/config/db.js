const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = (err, req, res, next) => {
  res.status(res.statusCode ? res.statusCode : 500).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = require('express')
  .Router()
  .get('/', (req, res) => {
    res.status(200).json({ message: 'get goals' })
  })
  .post('/', (req, res) => {
    res.status(200).json({ message: 'set goal' })
  })
  .put('/:id', (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
  })
  .delete('/:id', (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
  })

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

module.exports = require('express').Router()
  .all('*', require('../middleware/authMiddleware'))
  .get('/', getGoals)
  .post('/', setGoal)
  .put('/:id', updateGoal)
  .delete('/:id', deleteGoal)

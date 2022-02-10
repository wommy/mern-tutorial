const asyncHandler = require('express-async-handler')

// @desc    get goals
// @route   GET /api/goals
// @access  private
const getGoals = asyncHandler(async (_, res) => {
  res.status(200).json({ message: 'get goals' })
})
// @desc    set goal
// @route   SET /api/goals
// @access  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('plz add txt')
  }
  res.status(200).json({ message: 'set goal' })
})
// @desc    update goal
// @route   PUT /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` })
})
// @desc    delete goal
// @route   DELETE /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}

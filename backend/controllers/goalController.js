const asyncHandler = require('express-async-handler')
const { find, create, findById, findByIdAndUpdate } = require('../models/goalModel')
const errFunc = msg => {
  throw new Error(msg)
}

module.exports = {
  getGoals: asyncHandler(async ({ user: { id: user } }, { json }) => {
    json(await find(user))
  }),
  setGoal: asyncHandler(async ({ body: { text }, user: { id: user } }, { json }) => {
    !text ? errFunc('plz add txt') : json(await create({ text, user }))
  }),
  updateGoal: asyncHandler(async ({ params: { id }, user, body }, { json }) => {
    const goal = await findById(id)
    !goal && errFunc('goal not found')
    !user && errFunc('user not found')
    goal.user.toString() !== user.id && errFunc('user not authorized')
    json(await findByIdAndUpdate(id, body, { new: true }))
  }),
  deleteGoal: asyncHandler(async ({ user, params: { id } }, { json }) => {
    const goal = await findById(id)
    !goal && errFunc('goal not found')
    !user && errFunc('user not found')
    goal.user.toString() !== user.id && errFunc('user not authorized')
    await goal.remove()
    json({ id })
  }),
}

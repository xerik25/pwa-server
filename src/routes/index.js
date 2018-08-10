const routes = require('express').Router()
const { getUsers } = require('../apis')

routes.get('/getUsers', async (req, res) => {
  try {
    const users = await getUsers(req.query.requestedUsers)
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = routes

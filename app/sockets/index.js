const emitterTypes = require('./emitterTypes')
const listenerTypes = require('./listenerTypes')
const {
  getUsers
} = require('../apis')

/**
 * @function
 * @param {Object} - Initialized Websocket
 * @description Initializes all websocket emitters
 */
function initListeners (socket) {
  socket.on(listenerTypes.CLIENT_SUBSCRIBE_TO_TIMER, (interval) => {
    setInterval(() => {
      socket.emit(emitterTypes.SERVER_TIMER, new Date())
    }, interval)
  })

  socket.on(listenerTypes.CLIENT_GET_USERS, async (requestedUsers) => {
    try {
      const data = await getUsers(requestedUsers)
      socket.emit(emitterTypes.SERVER_USERS, data.users)
    } catch (error) {
      socket.emit(emitterTypes.SERVER_USERS_ERROR)
    }
  })
}

/*
const buildErrorResponse = (requestedActionType, response) => ({
  requestedActionType,
  errorCode: response.errorCode,
  description: response.description
})
*/

module.exports = initListeners

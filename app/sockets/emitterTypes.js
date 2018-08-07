/**
 * @const
 * @type {{SERVER_ERROR: string, SERVER_USERS: string, SERVER_USERS_ERROR: string, SERVER_TIMER: string}}
 * @description A list of all server emitter types
 */
const emitterTypes = {
  SERVER_ERROR: 'SERVER_ERROR',
  SERVER_USERS: 'SERVER_USERS',
  SERVER_USERS_ERROR: 'SERVER_USERS_ERROR',
  SERVER_TIMER: 'SERVER_TIMER'
}

module.exports = emitterTypes

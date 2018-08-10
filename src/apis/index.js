const { requestServiceGet } = require('./requestPromises')

/**
 * @function
 * @param {string} data - number of users to request
 * @returns {Promise} Promise that will make an API request for an array of users
 */
function getUsers (data) {
  return requestServiceGet({
    uri: `users?quantity=${data}`,
    baseUrl: 'https://finch.bubinga.co/api/',
    json: true
  })
}

module.exports = {
  getUsers
}

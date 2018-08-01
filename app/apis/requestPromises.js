const request = require('request')

/**
 * @function
 * @param {Object} apiParameters - Data for the API request
 * @returns {Promise} Async function that
 * Uses supplied parameters to wrap API request in a Promise
 */
const requestServiceGet = async (apiParameters) =>
  new Promise((resolve, reject) => {
    request(apiParameters, (error, response, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })

const requestServicePost = async (apiParameters) =>
  new Promise((resolve, reject) => {
    request.post(apiParameters, (error, response, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })

const requestServicePut = async (apiParameters) =>
  new Promise((resolve, reject) => {
    request.put(apiParameters, (error, response, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })

module.exports = {
  requestServiceGet,
  requestServicePost,
  requestServicePut
}

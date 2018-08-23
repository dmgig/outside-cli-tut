const axios = require('axios')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: 'https://api.ipdata.co?api-key=fbcd3ec9a8d795d07fca052a24aa480405fa1f34fc0dbdf67ca28f5c',
  })

  const { city, region } = results.data
  return `${city}, ${region}`
}

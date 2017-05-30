const weather = require('./weather')

module.exports = {
  cityInfo: function(city) {
    weather.now(city, (err, data) => {
      temp = parseInt(data.getDegreeTemp().temp)
      if(err) return "Something go wrong"
    })
      return `The weather in ${city} is ${temp}°C`
  }
}



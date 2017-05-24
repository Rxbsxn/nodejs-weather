require('dotenv').config()
const weather = require("openweather-node")

weather.setAPPID(process.env.API_KEY)
weather.setCulture(process.env.LOCAL)
weather.setForecastType(process.env.TYPE)

module.exports = weather

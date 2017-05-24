require('dotenv').config()

const express = require('express')
const app = express()
const weather = require("openweather-node")
const upperCase = require('./lib/upperCase')

weather.setAPPID(process.env.API_KEY)
weather.setCulture(process.env.LOCAL)
weather.setForecastType(process.env.TYPE)

const port = 3000

app.get('/weather/:city', (req, res) => {
  const city = upperCase(req.params.city)
  weather.now(city, (err, data) => {
    temp = parseInt(data.getDegreeTemp().temp)

    if(err) res.send("Something go wrong")
    else {
      res.send(`The weather in ${city} is ${temp}°C`)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on: ${port}`)
})

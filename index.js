const express = require('express')
const app = express()
const weather = require("openweather-node")
const upperCase = require('./lib/upperCase')

weather.setAPPID("cdbaa06b52336ef3d5647654c0388d92")
weather.setCulture("pl")
weather.setForecastType("daily")

const port = 3000

app.get('/weather/:city', (req, res) => {
  const city = upperCase(req.params.city)
  weather.now(city, (err, data) => {
    temp = data.getDegreeTemp().temp

    if(err) res.send("Something go wrong")
    else {
      res.send(`The weather in ${city} is ${temp}°C`)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on: ${port}`)
})

const express = require('express')
const weather = require('./lib/weather')
const upperCase = require('./lib/upperCase')
const app = express()


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

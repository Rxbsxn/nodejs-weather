const express = require('express')
const weather = require('./lib/weather')
const upperCase = require('./lib/upperCase')
const cityName = require('./lib/city')
const app = express()


const port = 3000

app.get('/weather/:city', (req, res) => {
  const city = upperCase(req.params.city)
  const result = cityName.cityInfo(city)
  res.send(`${result}`)  
})

app.listen(port, () => {
  console.log(`Server is running on: ${port}`)
})

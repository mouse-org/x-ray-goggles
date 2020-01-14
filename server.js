const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.all('*', (req, res, next) => {
  console.log(req.url);
  next();
})

app.use(express.static('public'))

app.get('/ping', (req, res) => {
  res.status(200);
  res.send('OK');
})

app.all('/404', (req, res) => {
  res.status(404)
  res.send('404')
})

app.all('*', (req, res) => {
  console.log(req.originalUrl)
  res.redirect('/404')
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
})

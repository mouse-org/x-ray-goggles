const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.static('public'))

app.all('/404', (req, res) => {
  console.log(req.originalUrl)
  //console.log('\n * * * * * * * \n')
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

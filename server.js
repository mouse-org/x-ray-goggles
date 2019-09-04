const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.static('public'))

app.use('*', (req, res) => {
  res.redirect('/404')
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
})

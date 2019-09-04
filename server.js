const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.use('*', (req, res) => {
  res.redirect('/404')
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
})

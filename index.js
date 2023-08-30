// index.js
// where your node app starts

// init project
require('dotenv').config()
let express = require('express')
let app = express()
let requestIp = require('request-ip')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(requestIp.mw())

// app.set('trust proxy', true)
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  res.json({
  	ipaddress: req.clientIp,
  	language: req.get('Accept-Language'),
  	software: req.get('User-Agent'),
  })
})

module.exports = app

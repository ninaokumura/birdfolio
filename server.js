const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server

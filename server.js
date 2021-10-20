const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const fs = require('fs')
const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/birds', routes)

const dataPath = './database/birds.json'
server.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    const template = 'home'
    const birdsData = JSON.parse(data)
    res.render(template, birdsData)
  })
})

module.exports = server

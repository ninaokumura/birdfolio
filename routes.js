const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
// const helpers = require('helpers.js')

// read all birds
router.get('/', (req, res) => {
  getAllBirds(birds => {
    const viewData = { birds }
    res.render('home', viewData)
  })
})

// const filePath = path.join(__dirname, 'database', 'birds.json')

module.exports = router

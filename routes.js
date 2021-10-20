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

const filePath = path.join(__dirname, 'database', 'birds.json')
function getAllBirds(cb) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Failed to read file: ', err.message)
      return
    }
    const birdsData = JSON.parse(data)
    cb(birdsData.birds)
  })
}
module.exports = router

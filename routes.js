const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const helpers = require('./database/helpers')

// read all birds
router.get('/', (req, res) => {
  helpers.getAllBirds(birds => {
    const viewData = { birds }
    res.render('home', viewData)
  })
})

// read 1 bird
router.get('/:id', (req, res) => {
  const template = 'details'
  const id = Number(req.params.id)
  helpers.getBirdById(id, foundBird => {
    const templateData = {
      ...foundBird,
      favoriteFoodList: foundBird.favoriteFood.join(', '),
    }
    res.render(template, templateData)
  })
})

// //functions
// const filePath = path.join(__dirname, 'database', 'birds.json')
// function getAllBirds(cb) {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error('Failed to read file: ', err.message)
//       return
//     }
//     const birdsData = JSON.parse(data)
//     cb(birdsData.birds)
//   })
// }

// function getBirdById(id, cb) {
//   getAllBirds(birds => {
//     const foundBird = birds.find(element => element.id === id)
//     cb(foundBird)
//   })
// }
module.exports = router

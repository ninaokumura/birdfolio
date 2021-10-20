const path = require('path')
const fs = require('fs')
const express = require('express')

const filePath = path.join(__dirname, 'birds.json')

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

function getBirdById(id, cb) {
  getAllBirds(birds => {
    const foundBird = birds.find(element => element.id === id)
    cb(foundBird)
  })
}

module.exports = { getAllBirds, getBirdById }

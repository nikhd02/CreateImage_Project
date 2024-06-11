const express = require('express')
const { generateImage, getImages } = require('../controllers/imageController')

const imageRouter = express.Router()

imageRouter.route('/')
    .post(generateImage)
imageRouter.route('/')
    .get(getImages)

module.exports = imageRouter
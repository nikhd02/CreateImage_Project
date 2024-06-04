const imageModel = require('../models/imageModel');
const fs = require('fs')
const path = require('path')

const generateImage = async (req, res) => {
    const { searchText } = req.body
    let url = ""
    // const response = await fetch(`https://source.unsplash.com/random/400x400/?${searchText}`);
    // console.log(response.url)
    let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.png'
    try {
        const response = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc1MjgyMzIsImV4cCI6MTcxNzYxNDYzMn0.2-tL8VEXHWV_sa9QLv54BVqYdeMY1-4FIzbpzEE8sfk",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZhLxHS7V1YwQTC25",
              "sec-ch-ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-7YmBCqFxgPSYiZU\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/${uniqueSuffix}\r\n------WebKitFormBoundaryZhLxHS7V1YwQTC25--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
        url = await response.json();

    } catch (e) {
        console.log(e)
    }

    const image = new imageModel({
        query: searchText,
        image: url
    })
    await image.save()

    res.status(200).json({
        status: 'success',
        message: 'POST Request to /api/v1/images',
        data: {
            searchText,
            url
        }
    })
}

const getImages = async (req, res) => {
    const images = await imageModel.find()
    console.log(images)
    res.status(200).json({
        status: 'success',
        message: 'GET Request to /api/v1/images',
        data: images
    })

}

module.exports = { generateImage, getImages }
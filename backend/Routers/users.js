const express = require('express')
const bodyParser = require('body-parser')
const userModel = require('../modules/user-model')

const router = express.Router()

router.use(bodyParser.json())


router.get('/', (req, res) => {
    res.send("user")
})

router.post('/post', (req, res) => {
    const newUser = new userModel(req.body)
    newUser.save().then(response => console.log(response))
    res.send("post")
})

router.get('/get', (req, res) => {
    userModel.find().then(response => res.send(response)).catch(err => console.log(err))
})

module.exports = router
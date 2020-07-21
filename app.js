const express = require('express')
const cors = require('cors')
const {uuid} = require('uuidv4')

const routes = express()

routes.use(express.json())
routes.use(cors())

const tweets = []

routes.get('/tweets/list', (request, response) =>{
    return response.json(tweets)
})

routes.post('tweets/create', (reuest, response)=>{
    const { content, user_id } = request.body

    const tweet = {id: uuid(), content, user_id: uuid()}

    tweets.push(tweet)

    return response.json(beer)
})

module.exports = routes
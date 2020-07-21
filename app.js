const express = require('express')
const cors = require('cors')
const {uuid} = require('uuidv4')

const routes = express()

routes.use(express.json())
routes.use(cors())

const tweets = []

function tweetMiddleware(request, response, next){
    const {user_id} = request.params
    if(user_id ){
        
    }
}

routes.get('/tweets/list', (request, response) =>{
    return response.json(tweets)
})

routes.post('tweets/create', (reuest, response)=>{
    const { content, user_id } = request.body

    const tweet = {id: uuid(), content, user_id: uuid()}

    tweets.push(tweet)

    return response.json(tweet)
})

routes.put('tweets/update/:id', (request, response)=>{
    const { id } = request.params
    const { content } = request.body

    const tweetIndex = tweets.findIndex( t => t.id == id)

    if(tweetIndex < 0){
        return response.status(400).json({error: 'Tweet not found'})
    }

    const tweet = {
        id,
        content,
        user_id
    }

    tweets[tweetIndex] = tweet
    
    return response.json(tweet)
})

routes.delete('tweets/delete/:id', (request, response)=>{
    const { id } = request.params

    const tweetIndex = tweets.findIndex( t=> t.id == id)

    if(tweetIndex < 0){
        return response.status(400).json({error: 'Tweet not found'})
    }

    tweets.splice(tweetIndex, 1)

    return response.status(204).send()
})

module.exports = routes
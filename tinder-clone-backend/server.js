import express from 'express'
import mongoose from 'mongoose'

//APP Config
const app = express()
const port = process.env.PORT || 8001

//Middlewares
app.use(express.json())

//DB Config

//API Endpoints 

app.get('/', (req, res) => {
    return res.status(200).send('Hello Tinder Clone')
})

//Listener

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})

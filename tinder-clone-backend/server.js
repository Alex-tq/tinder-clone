import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Cards from './dbCard.js'

dotenv.config()//To have enviroment variables in the .env file

//APP Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = process.env.MONGO_DB_URI;

//Middlewares
app.use(express.json())
app.use(cors())

//DB Config

mongoose.connect(connection_url, {
    useUnifiedTopology: true
})

//API Endpoints 

app.get('/', (req, res) => {
    return res.status(200).send('Hello Tinder Clone')
})

app.post('/tinder/cards',  (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }

    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})

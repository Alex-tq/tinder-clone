import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()//To have enviroment variables in the .env file

//APP Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = process.env.MONGO_DB_URI;

//Middlewares
app.use(express.json())

//DB Config

mongoose.connect(connection_url, {
    useUnifiedTopology: true
})

//API Endpoints 

app.get('/', (req, res) => {
    return res.status(200).send('Hello Tinder Clone')
})

//Listener

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})

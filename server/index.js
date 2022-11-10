import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import eventsRoutes from './routes/events.js'

const app = express()

app.use('/events', eventsRoutes)

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

const CONNECTION_URL = ''
const port = process.env.port || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at ${port}`)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })

mongoose.set() //may delete later


app.get('/', (req, res) => {
    res.send('Hello world')
})
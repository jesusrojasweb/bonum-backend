import express from 'express'
import { port } from './config/config'
import connectDB from './config/mongo'

const app = express()

void connectDB()

app.use(express.json())

app.use('/', (_req, res) => {
  res.send('Started')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

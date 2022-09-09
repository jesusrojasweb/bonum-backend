import express from 'express'
import { port } from './config/config'

const app = express()

app.use(express.json())

app.use('/', (_req, res) => {
  res.send('Started')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

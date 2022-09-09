import express from 'express'

const app = express()

app.use(express.json())

app.use('/', (_req, res) => {
  res.send('Started')
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

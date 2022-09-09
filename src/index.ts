import express from 'express'
import { port } from './config/config'
import connectDB from './config/mongo'
import v1AuthRoutes from './v1/routes/authRoutes'

const app = express()

void connectDB()

app.use(express.json())

app.use('/api/v1/auth', v1AuthRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

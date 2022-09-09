import express from 'express'
import { PORT } from './config/config'
import connectDB from './config/mongo'
import v1AuthRoutes from './v1/routes/authRoutes'
import cookieParser from 'cookie-parser'

const app = express()

void connectDB()

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth', v1AuthRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

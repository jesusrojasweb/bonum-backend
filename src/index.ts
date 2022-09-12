import express from 'express'
import cors from 'cors'
import { CLIENT_URL, PORT } from './config/config'
import connectDB from './config/mongo'
import v1AuthRoutes from './v1/routes/authRoutes'
import v1CoachesRoutes from './v1/routes/coachesRoutes'
import cookieParser from 'cookie-parser'
import notFound from './middlewares/notFound'

const app = express()

void connectDB()

app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
)
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth', v1AuthRoutes)
app.use('/api/v1/coaches', v1CoachesRoutes)
app.use(notFound)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export const port =
  process.env.PORT !== null && process.env.PORT !== undefined
    ? process.env.PORT
    : 3001
export const mongoDB = process.env.DB_URL

import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export const PORT =
  process.env.PORT !== null && process.env.PORT !== undefined
    ? process.env.PORT
    : 3001

export const DB_UR = process.env.DB_URL

export const SECRET =
  process.env.SECRET !== null && process.env.SECRET !== undefined
    ? process.env.SECRET
    : 'secret'

export const SECRET_REFRESH =
  process.env.SECRET_REFRESH !== null &&
  process.env.SECRET_REFRESH !== undefined
    ? process.env.SECRET_REFRESH
    : 'refresh'

export const NODE_ENV =
  process.env.NODE_ENV !== null && process.env.NODE_ENV !== undefined
    ? process.env.NODE_ENV
    : 'production'

export const CLIENT_URL =
  NODE_ENV === 'development' ? 'http://localhost:3000' : ''

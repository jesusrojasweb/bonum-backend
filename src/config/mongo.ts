import mongoose from 'mongoose'
import { DB_UR } from './config'

const connectDB = async (): Promise<any> => {
  try {
    if (DB_UR !== undefined) {
      await mongoose.connect(DB_UR)
      console.log('Database connected')
    } else {
      throw new Error('Mongo URL is undefined')
    }
  } catch (error) {
    console.log('Error', error)
    process.exit(1)
  }
}

export default connectDB

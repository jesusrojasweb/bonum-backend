import mongoose from 'mongoose'
import { mongoDB } from './config'

const connectDB = async (): Promise<any> => {
  try {
    if (mongoDB !== undefined) {
      await mongoose.connect(mongoDB)
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

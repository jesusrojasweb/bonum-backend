import { Schema, model } from 'mongoose'
import transformSchema from '../utils/transformSchema'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

userSchema.set('toJSON', {
  transform: transformSchema,
})

export default model('User', userSchema)

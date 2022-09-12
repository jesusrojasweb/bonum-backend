import { Schema, model } from 'mongoose'
import transformSchema from '../utils/transformSchema'

const coachSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkedinURL: {
    type: String,
    required: true,
  },
  countrie: {
    type: String,
    required: true,
  },
})

coachSchema.set('toJSON', {
  transform: transformSchema,
})

export default model('Coach', coachSchema)

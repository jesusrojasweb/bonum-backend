import { Countries } from '../enums'
import axios from 'axios'

export const isLink = async (value: any): Promise<any> => {
  const startHtml = value.startsWith('https://') as boolean
  try {
    if (typeof value === 'string') {
      if (!startHtml) {
        value = `https://${value}`
        await axios.get(value)
        return value
      }
    }
  } catch (error) {
    throw new Error('Resource not found')
  }
}

export const validateCountrie = (value: Countries): Countries => {
  const isCountrie = Object.values(Countries).includes(value)

  if (!isCountrie) {
    throw new Error('Value is not an available countrie')
  }
  return value
}

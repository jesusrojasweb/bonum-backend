import bcrypt from 'bcrypt'
import { Response } from 'express'
import { SECRET } from '../config/config'
import User from '../models/User'
import { CreateUser, LoginUser } from '../types'
import { generateRefreshToken, generateToken } from '../utils/tokenManager'

const saltRounds = 10
const expiresIn = 60 * 60 * 60

export const getUser = async (userId: string): Promise<any> => {
  try {
    const user = await User.findOne({ _id: userId })

    return user
  } catch (error) {
    return await Promise.reject(error)
  }
}

export const createUser = async (
  { name, email, password }: CreateUser,
  res: Response
): Promise<any> => {
  try {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      name,
      email,
      passwordHash,
    })

    const newUser = await user.save()

    const { token } = generateToken(newUser.id, expiresIn, SECRET)
    generateRefreshToken(newUser.id, res)

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token,
    }
  } catch (error) {
    console.log('error service')
    return await Promise.reject(error)
  }
}

export const login = async (
  { email, password }: LoginUser,
  res: Response
): Promise<any> => {
  try {
    const user = await User.findOne({ email })
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!passwordCorrect || user === null) {
      throw new Error('Invalid user or password')
    }

    const { token } = generateToken(user.id, expiresIn, SECRET)
    generateRefreshToken(user.id, res)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    }
  } catch (error) {
    return await Promise.reject(error)
  }
}

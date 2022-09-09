import bcrypt from 'bcrypt'
import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config/config'
import User from '../models/User'
import { CreateUser, LoginUser } from '../types'

const saltRounds = 10

export const createUser = async ({
  name,
  email,
  password,
}: CreateUser): Promise<any> => {
  try {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      name,
      email,
      passwordHash,
    })

    return await user.save()
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

    if (passwordCorrect === false || user === null) {
      throw new Error('Invalid user or password')
    }

    const userForToken = {
      id: user._id,
      email: user.email,
    }

    const token = jwt.sign(userForToken, secret, {
      expiresIn: 60 * 60 * 24 * 7,
    })

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 7),
      sameSite: 'none',
    })

    return {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    }
  } catch (error) {
    return await Promise.reject(error)
  }
}

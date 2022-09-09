import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { NODE_ENV, SECRET_REFRESH } from '../config/config'

interface GenerateToken {
  token: string
}

export const generateToken = (
  id: string,
  expiresIn: number,
  secret: string
): GenerateToken => {
  const token = jwt.sign({ id }, secret, { expiresIn })
  return { token }
}

export const generateRefreshToken = (id: string, res: Response): void => {
  const expiresIn = 60 * 60 * 24 * 7
  const refreshToken = generateToken(id, expiresIn, SECRET_REFRESH)

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: !(NODE_ENV === 'development'),
    expires: new Date(Date.now() + expiresIn * 1000),
    sameSite: 'none',
  })
}

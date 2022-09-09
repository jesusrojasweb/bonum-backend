import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET_REFRESH } from '../config/config'
import { JwtPayload, ReqWithId } from '../types'

export const requireRefreshToken = (
  req: ReqWithId,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { token: refreshTokenCookie } = req.cookies.refreshToken

    if (refreshTokenCookie === null || refreshTokenCookie === undefined)
      throw new Error('Token doesnt exist')

    const { id } = jwt.verify(refreshTokenCookie, SECRET_REFRESH) as JwtPayload

    req.id = id

    next()
  } catch (error) {
    res.status(401).json({ msg: error.message })
  }
}

import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config/config'
import { JwtPayload, ReqWithId } from '../types'

export const requireToken = (
  req: ReqWithId,
  res: Response,
  next: NextFunction
): void => {
  try {
    const requestToken = req.headers?.authorization

    if (requestToken === undefined || requestToken === null) {
      throw new Error('No bearer')
    }

    const token = requestToken.split(' ')[1]

    const { id } = jwt.verify(token, SECRET) as JwtPayload

    req.id = id

    next()
  } catch (error) {
    res.status(401).json({ msg: error.message })
  }
}

import { Request, Response } from 'express'
import { SECRET } from '../config/config'
import * as authServices from '../services/authServices'
import { ReqWithId } from '../types'
import { generateToken } from '../utils/tokenManager'

const expiresIn = 60 * 60

export const createUser = (req: Request, res: Response): void => {
  const userReq = req.body
  authServices
    .createUser(userReq, res)
    .then(newUser => {
      res.status(201).json({ status: 'OK', data: newUser })
    })
    .catch(error => {
      console.log('error controller')
      res.status(500).json({ error: error.message })
    })
}

export const login = (req: Request, res: Response): void => {
  const userReq = req.body
  void authServices
    .login(userReq, res)
    .then(user => {
      res.json({ status: 'OK', data: user })
    })
    .catch(error => {
      res.status(401).json({ error: error.message })
    })
}

export const logout = (_req: Request, res: Response): void => {
  res.clearCookie('refreshToken')
  res.json({ status: 'OK' })
}

export const refreshToken = (req: ReqWithId, res: Response): void => {
  const { id = '' } = req

  const { token } = generateToken(id, expiresIn, SECRET)

  authServices
    .getUser(id)
    .then(user => {
      res.json({ status: 'OK', data: { user, token } })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
}

import { Request, Response } from 'express'
import * as authServices from '../services/authServices'

export const createUser = (req: Request, res: Response): void => {
  const userReq = req.body
  authServices
    .createUser(userReq)
    .then(newUser => {
      res.status(201).json({ status: 'OK', data: newUser })
    })
    .catch(error => {
      console.log('error controller')
      res.status(500).json({ msg: error.message })
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
      res.status(401).json({ msg: error.message })
    })
}

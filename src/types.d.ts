import { Request } from 'express'

export interface CreateUser {
  name: string
  email: string
  password: string
  isAdmin?: boolean
}

export interface LoginUser {
  email: string
  password: string
}

interface ReqWithId extends Request {
  id?: string
}

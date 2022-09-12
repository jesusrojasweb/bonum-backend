import { Request } from 'express'
import { Countries } from './enums'

export interface CreateUser {
  name: string
  email: string
  password: string
  isAdmin?: boolean
}

export interface CreateCoach {
  name: string
  imageURL: string
  description: string
  linkedinURL: string
  countrie: Countries
}

export interface UpdateCoach {
  name?: string
  imageURL?: string
  description?: string
  linkedinURL?: string
  countrie?: Countries
}

export interface LoginUser {
  email: string
  password: string
}

export interface ReqWithId extends Request {
  id?: string
}

export interface JwtPayload {
  id: string
}

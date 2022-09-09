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

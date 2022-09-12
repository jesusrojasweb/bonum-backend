import { NextFunction, Request, Response } from 'express'
import { validationResult, body } from 'express-validator'
import { isLink, validateCountrie } from '../utils/coachValidationTypes'

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  return next()
}
export const registerValidator = [
  body('name', 'Name is required').trim().not().isEmpty(),
  body('email', 'Eamil format invalid').trim().isEmail().normalizeEmail(),
  body('password', 'Password must contain a minimum of 8 characters')
    .trim()
    .isLength({ min: 8 }),
  handleValidationErrors,
]
export const loginValidator = [
  body('email', 'Eamil format invalid').trim().isEmail().normalizeEmail(),
  body('password', 'Password must contain a minimum of 8 characters')
    .trim()
    .isLength({ min: 8 }),
  handleValidationErrors,
]

export const coachValidator = [
  body('name').trim().not().isEmpty(),
  body('description').trim().not().escape().isEmpty(),
  body('countrie').trim().not().isEmpty().custom(validateCountrie),
  body('imageURL').trim().not().isEmpty().custom(isLink),
  body('linkedinURL').trim().not().isEmpty().custom(isLink),

  handleValidationErrors,
]

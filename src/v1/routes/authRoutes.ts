import { Router } from 'express'
import * as authController from '../../controllers/authControllers'
import {
  registerValidator,
  loginValidator,
} from '../../middlewares/infoValidator'
import { requireRefreshToken } from '../../middlewares/requireRefreshToken'
// import { requireToken } from '../../middlewares/requireToken'

const router = Router()

router.post('/login', loginValidator, authController.login)
router.post('/register', registerValidator, authController.createUser)
router.get('/logout', authController.logout)
router.get('/refresh', requireRefreshToken, authController.refreshToken)

export default router

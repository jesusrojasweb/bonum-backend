import { Router } from 'express'
import * as authController from '../../controllers/authControllers'
import { authenticationValidator } from '../../middlewares/infoValidator'
import { requireRefreshToken } from '../../middlewares/requireRefreshToken'
// import { requireToken } from '../../middlewares/requireToken'

const router = Router()

router.post('/login', authenticationValidator, authController.login)
router.post('/register', authenticationValidator, authController.createUser)
router.get('/logout', authController.logout)
router.get('/refresh', requireRefreshToken, authController.refreshToken)

export default router

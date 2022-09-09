import { Router } from 'express'
import * as authController from '../../controllers/authControllers'
import { requireRefreshToken } from '../../middlewares/requireRefreshToken'

const router = Router()

router.post('/login', authController.login)
router.post('/register', authController.createUser)
router.get('/logout', authController.logout)
router.get('/refresh', requireRefreshToken, authController.refreshToken)

export default router

import { Router } from 'express'
import * as authController from '../../controllers/authControllers'

const router = Router()

router.get('/', (_req, res) => {
  res.send('Started')
})
router.post('/login', authController.login)
router.post('/register', authController.createUser)

export default router

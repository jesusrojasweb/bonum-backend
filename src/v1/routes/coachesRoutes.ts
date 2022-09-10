import { Router } from 'express'
import * as coachesController from '../../controllers/coachesController'
import { requireToken } from '../../middlewares/requireToken'

const router = Router()

router.get('/', coachesController.getCoaches)
router.post('/', requireToken, coachesController.createCoach)
router.patch('/:coachId', requireToken, coachesController.updateCoach)
router.delete('/:coachId', requireToken, coachesController.deleteCoach)

export default router

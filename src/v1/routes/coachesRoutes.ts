import { Router } from 'express'
import * as coachesController from '../../controllers/coachesController'
import { coachValidator } from '../../middlewares/infoValidator'
import { requireToken } from '../../middlewares/requireToken'

const router = Router()

router.get('/', coachesController.getCoaches)
router.post('/', requireToken, coachValidator, coachesController.createCoach)
router.patch(
  '/:coachId',
  requireToken,
  coachValidator,
  coachesController.updateCoach
)
router.delete('/:coachId', requireToken, coachesController.deleteCoach)

export default router

import { Request, Response } from 'express'
import * as coachesServices from '../services/coachesServices'

export const getCoaches = (_req: Request, res: Response): void => {
  coachesServices
    .getCoaches()
    .then(coaches => {
      res.json({ status: 'OK', data: coaches })
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

export const createCoach = (req: Request, res: Response): void => {
  const reqCoach = req.body

  coachesServices
    .createCoach(reqCoach)
    .then(newCoach => {
      res.status(201).json({ status: 'OK', data: newCoach })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
}

export const updateCoach = (req: Request, res: Response): void => {
  const { coachId } = req.params
  const reqCoach = req.body

  coachesServices
    .updateCoach(coachId, reqCoach)
    .then(updatedCoach => {
      res.status(201).json({ status: 'OK', data: updatedCoach })
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

export const deleteCoach = (req: Request, res: Response): void => {
  const { coachId } = req.params

  coachesServices
    .deleteCoach(coachId)
    .then(deletedCoach => {
      res.json({ status: 'OK', msg: 'Coach deleted', data: deletedCoach })
    })
    .catch(error => res.status(500).json({ error: error.message }))
}

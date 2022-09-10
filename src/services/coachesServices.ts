import Coach from '../models/Coach'
import { CreateCoach, UpdateCoach } from '../types'

export const getCoaches = async (): Promise<any> => {
  try {
    const coaches = await Coach.find({})

    return coaches
  } catch (error) {
    return await Promise.reject(error)
  }
}

export const createCoach = async ({
  name,
  imageURL,
  description,
  linkedinURL,
  countrie,
}: CreateCoach): Promise<any> => {
  try {
    const newCoach = new Coach({
      name,
      imageURL,
      description,
      linkedinURL,
      countrie,
    })

    const coach = await newCoach.save()

    return coach
  } catch (error) {
    return await Promise.reject(error)
  }
}

export const updateCoach = async (
  id: string,
  data: UpdateCoach
): Promise<any> => {
  try {
    const updatedCoach = await Coach.findByIdAndUpdate(id, data, {
      new: true,
    })
    return updatedCoach
  } catch (error) {
    return await Promise.reject(error)
  }
}

export const deleteCoach = async (id: string): Promise<any> => {
  try {
    const deletedCoach = await Coach.findByIdAndDelete(id)

    return deletedCoach
  } catch (error) {
    return await Promise.reject(error)
  }
}

const transformSchema = (_document: any, returnedObject: any): void => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
  if (
    returnedObject.passwordHash !== null &&
    returnedObject.passwordHash !== undefined
  ) {
    delete returnedObject.passwordHash
  }
}

export default transformSchema

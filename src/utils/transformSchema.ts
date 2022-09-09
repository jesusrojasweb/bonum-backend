const transformSchema = (_document: any, returnedObject: any): void => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
}

export default transformSchema

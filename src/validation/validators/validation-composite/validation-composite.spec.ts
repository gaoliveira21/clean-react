import faker from 'faker'

import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from '@/validation/test'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)

  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    fieldValidationsSpy[0].error = new Error(faker.random.words())
    fieldValidationsSpy[1].error = new Error(faker.random.words())

    const error = sut.validate(fieldName, faker.random.words())
    expect(error).toBe(fieldValidationsSpy[0].error.message)
  })

  test('Should return falsy if validation succeeds', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)

    const error = sut.validate(fieldName, faker.random.words())
    expect(error).toBeFalsy()
  })
})

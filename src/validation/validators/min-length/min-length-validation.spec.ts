import faker from 'faker'

import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation =>
  new MinLengthValidation(faker.database.column(), 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.datatype.string(3))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return error falsy if value', () => {
    const sut = makeSut()
    const error = sut.validate(faker.datatype.string(5))
    expect(error).toBeFalsy()
  })
})

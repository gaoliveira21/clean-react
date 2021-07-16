import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin = (): React.ReactElement => {
  return (
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
  />
  )
}

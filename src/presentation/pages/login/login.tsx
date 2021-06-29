import { useState, useEffect } from 'react'

import { Authentication } from '@/domain/usecases'

import {
  LoginHeader,
  Footer,
  Input,
  FormStatus
} from '@/presentation/components'

import { FormContext } from '@/presentation/contexts/form/form-context'

import { Validation } from '@/presentation/protocols/validation'

import Styles from './login-styles.scss'

type LoginProps = {
  validation: Validation
  authentication: Authentication
}

export const Login = ({ validation, authentication }: LoginProps): React.ReactElement => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    setState({ ...state, isLoading: true })

    await authentication.auth({
      email: state.email,
      password: state.password
    })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <FormContext.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />

          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>

      <Footer />
    </div>
  )
}

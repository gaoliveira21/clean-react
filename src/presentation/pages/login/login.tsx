import Styles from './login-styles.scss'

import { LoginHeader } from '@/presentation/components/login-header/login-header'
import { Footer } from '@/presentation/components/footer/footer'
import { Input } from '@/presentation/components/input/input'
import { FormStatus } from '@/presentation/components/form-status/form-status'

export const Login = (): React.ReactElement => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>

        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>

      <Footer />
    </div>
  )
}

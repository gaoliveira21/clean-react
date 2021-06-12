import Styles from './form-status-styles.scss'

import { Spinner } from '@/presentation/components/spinner/spinner'

export const FormStatus = (): React.ReactElement => {
  return (
    <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}>Erro</span>
  </div>
  )
}

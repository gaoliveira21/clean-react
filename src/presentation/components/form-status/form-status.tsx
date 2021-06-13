import { useContext } from 'react'

import Styles from './form-status-styles.scss'

import { Spinner } from '@/presentation/components/spinner/spinner'

import { FormContext } from '@/presentation/contexts/form/form-context'

export const FormStatus = (): React.ReactElement => {
  const {
    state: { isLoading, mainError }
  } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  )
}

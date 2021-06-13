import { useContext } from 'react'

import Styles from './form-status-styles.scss'

import { Spinner } from '@/presentation/components/spinner/spinner'

import { FormContext } from '@/presentation/contexts/form/form-context'

export const FormStatus = (): React.ReactElement => {
  const {
    state: { isLoading },
    errorState: { main }
  } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {main && <span className={Styles.error}>{main}</span>}
    </div>
  )
}

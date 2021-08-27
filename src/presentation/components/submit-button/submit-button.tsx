import React, { useContext } from 'react'

import { FormContext } from '@/presentation/contexts/form/form-context'

type InputProps = {
  children: React.ReactNode
}

export const SubmitButton = ({ children }: InputProps): React.ReactElement => {
  const { state } = useContext(FormContext)

  return (
    <button
      data-testid="submit"
      disabled={state.isFormInvalid}
      type="submit"
    >
      {children}
    </button>
  )
}

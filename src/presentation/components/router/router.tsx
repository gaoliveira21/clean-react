import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from '@/presentation/pages'

type Props = {
  makeLogin: () => React.ReactElement
}

export const Router = ({ makeLogin }: Props): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

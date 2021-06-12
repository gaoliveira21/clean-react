import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '@/presentation/pages'

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: () => React.ReactElement
  makeSignUp: () => React.ReactElement
}

export const Router = (factory: Factory): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={factory.makeLogin} />
        <Route path="/signup" exact component={factory.makeSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

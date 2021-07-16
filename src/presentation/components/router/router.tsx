import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: () => React.ReactElement
}

export const Router = ({ makeLogin }: Props): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

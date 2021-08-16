import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./views/Homepage"
import Dashboard from "./views/Dashboard"
import "./App.less"
import { Provider } from "react-redux"
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/app" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

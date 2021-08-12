import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./views/Homepage"
import Dashboard from "./views/Dashboard"
import "./App.less"

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/app" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

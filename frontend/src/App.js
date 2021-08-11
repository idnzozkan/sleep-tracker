import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./views/homepage"
import Dashboard from "./views/dashboard"
import "antd/dist/antd.css"

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

import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./views/Homepage"
import Login from "./views/Login"
import Dashboard from "./views/Dashboard"
import "./App.less"
import { useDispatch } from "react-redux"
import { loadUser } from "./store/actions/authActions"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth" component={Login} />
        <Route path="/app" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App

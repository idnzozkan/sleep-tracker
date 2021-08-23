import React from "react"
import { Button } from "antd"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Sleep Tracker App!</h1>
      <Link to="/auth">
        <Button type="primary">Get Started</Button>
      </Link>
    </div>
  )
}

export default Homepage

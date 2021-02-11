import React from "react"
import { Switch, Redirect, Route } from "react-router-dom"

import { Posts } from "./views/Posts/Posts"

const App = () => {
  return (
    <Switch>
      {/* Routes */}
      <Route path="/posts" component={Posts} />
      <Route path="/" component={Posts} />

      <Redirect to="/" />
    </Switch>
  )
}

export default App

import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from "./App"
import { createReduxStore } from "./reducer"

import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)

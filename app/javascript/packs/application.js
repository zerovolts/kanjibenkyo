/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You"re encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it"ll be compiled.
//
// To reference this file, add <%= javascript_pack_tag "application" %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "mobx-react"

import App from "../react/app"
import store from "../models/store"

window.store = store

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app"),
  )
})

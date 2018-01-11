import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as request from "../request"
import Header from "./header"
import Home from "./home"
import KanaQuiz from "./kana-quiz"
import KanaIndex from "./kana-index"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    request.fetchUser().then(data => {
      this.setState({
        user: data
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kana" component={KanaIndex} />
            <Route path="/quiz/kana" component={KanaQuiz} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

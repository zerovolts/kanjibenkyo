import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as request from "../request"
import Header from "./header"
import Home from "./home"
import KanaQuiz from "./kana-quiz"
import KanaIndex from "./kana-index"
import KanaShow from "./kana-show"
import KanjiIndex from "./kanji-index"
import KanjiShow from "./kanji-show"
import Profile from "./profile"

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
            <Route exact path="/kana" component={KanaIndex} />
            <Route path="/kana/:kana" component={KanaShow} />
            <Route exact path="/kanji" component={KanjiIndex} />
            <Route path="/kanji/:kanji" component={KanjiShow} />
            <Route path="/quiz/kana" component={KanaQuiz} />
            <Route path="/user/:login" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

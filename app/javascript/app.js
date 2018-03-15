import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as request from "./utils/request"
import Header from "./components/header"
import Home from "./pages/home"
import KanaQuiz from "./pages/kana-quiz"
import KanaIndex from "./pages/kana-index"
import KanaShow from "./pages/kana-show"
import KanjiIndex from "./pages/kanji-index"
import KanjiShow from "./pages/kanji-show"
import Profile from "./pages/profile"

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

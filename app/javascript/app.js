import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as request from "./utils/request"
import Header from "./components/header"
import Home from "./pages/home"
import KanaIndex from "./pages/kana-index"
import KanjiIndex from "./pages/kanji-index"
import KanaQuiz from "./pages/kana-quiz"
import KanaList from "./pages/kana-list"
import KanaShow from "./pages/kana-show"
import KanaStudy from "./pages/kana-study"
import KanjiList from "./pages/kanji-list"
import KanjiShow from "./pages/kanji-show"
import Profile from "./pages/profile"
import VerbConjugator from "./pages/verb-conjugator"

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
        <React.Fragment>
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/kana" component={KanaIndex} />
            <Route exact path="/list/kana" component={KanaList} />
            <Route path="/kana/:kana" component={KanaShow} />
            <Route path="/study/kana" component={KanaStudy} />
            <Route exact path="/kanji" component={KanjiIndex} />
            <Route exact path="/list/kanji" component={KanjiList} />
            <Route path="/kanji/:kanji" component={KanjiShow} />
            <Route path="/quiz/kana" component={KanaQuiz} />
            <Route path="/user/:login" component={Profile} />
            <Route path="/verb-conjugator" component={VerbConjugator} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App

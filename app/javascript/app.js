import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as request from "utils/request";
import Header from "components/header/header";
import Home from "pages/home/home";
import KanaIndex from "pages/kana-index/kana-index";
import KanjiIndex from "pages/kanji-index/kanji-index";
import KanaQuiz from "pages/kana-quiz/kana-quiz";
import KanaList from "pages/kana-list/kana-list";
import KanaShow from "pages/kana-show/kana-show";
import KanaStudy from "pages/kana-study/kana-study";
import KanjiList from "pages/kanji-list/kanji-list";
import KanjiShow from "pages/kanji-show/kanji-show";
import Profile from "pages/profile/profile";
import WordIndex from "pages/word-index/word-index";
import VerbConjugator from "pages/verb-conjugator/verb-conjugator";
import WordList from "pages/word-list/word-list";
import WordShow from "pages/word-show/word-show";
import ArticleIndex from "pages/article-index/article-index";
import PageNotFound from "pages/page-not-found/page-not-found";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
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
            <Route path="/words/verb-conjugator" component={VerbConjugator} />
            <Route path="/words/all" component={WordList} />
            <Route path="/words/:word" component={WordShow} />
            <Route path="/words" component={WordIndex} />
            <Route path="/articles/hello" component={ArticleIndex} />
            <Route component={PageNotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

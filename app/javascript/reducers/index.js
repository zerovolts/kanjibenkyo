import { combineReducers } from "redux"

import kanjiList from "./kanji-list"
import kanaList from "./kana-list"
import kanaQuiz from "./kana-quiz"

export default combineReducers({
  kanjiList,
  kanaList,
  kanaQuiz
})

import { combineReducers } from "redux"

import kanjiList from "./kanji-list"
import kanaList from "./kana-list"

export default combineReducers({
  kanjiList,
  kanaList
})

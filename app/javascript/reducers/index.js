import { combineReducers } from "redux";

import kanjiList from "reducers/kanji-list";
import kanaList from "reducers/kana-list";
import kanaQuiz from "reducers/kana-quiz";

export default combineReducers({
  kanjiList,
  kanaList,
  kanaQuiz
});

import { combineReducers } from "redux";

import kanaList from "reducers/kana-list";
import kanjiList from "reducers/kanji-list";
import wordList from "reducers/word-list";
import kanaQuiz from "reducers/kana-quiz";
import auth from "reducers/auth";

export default combineReducers({
  kanaList,
  kanjiList,
  wordList,
  kanaQuiz,
  auth
});

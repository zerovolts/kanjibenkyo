import { combineReducers } from "redux";

import kanaList from "reducers/kana-list";
import kanjiList from "reducers/kanji-list";
import wordList from "reducers/word-list";
import kanaQuiz from "reducers/kana-quiz";

export default combineReducers({
  kanaList,
  kanjiList,
  wordList,
  kanaQuiz
});

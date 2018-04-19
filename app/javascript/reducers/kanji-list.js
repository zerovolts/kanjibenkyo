import {
  KANJI_REQUEST,
  KANJI_RECEIVE
} from "../actions"

const initialState = {
  isFetching: false,
  kanji: []
}

const kanjiList = (state = initialState, action) => {
  switch (action.type) {
    case KANJI_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case KANJI_RECEIVE:
      return {
        ...state,
        isFetching: false,
        kanji: action.kanji
      }
    default:
      return state
  }
}

export default kanjiList

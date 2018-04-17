const kanjiList = (state = {
  isFetching: false,
  kanji: []
}, action) => {
  switch (action.type) {
    case "REQUEST_KANJI":
      return {
        ...state,
        isFetching: true
      }
    case "RECEIVE_KANJI":
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

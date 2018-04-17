const requestKanji = () => ({
  type: "REQUEST_KANJI"
})

const receiveKanji = kanji => ({
  type: "RECEIVE_KANJI",
  kanji
})

export const fetchKanji = () => dispatch => {
  dispatch(requestKanji())
  return fetch("/api/v1/kanji")
    .then(res => res.json())
    .then(json => dispatch(receiveKanji(json)))
}

export const fetchKanjiIfNeeded = () => (dispatch, getState) => {
  if (getState().kanjiList.kanji.length === 0) {
    return dispatch(fetchKanji())
  }
}

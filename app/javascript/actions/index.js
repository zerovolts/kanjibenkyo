// -- KANJI -- //

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

// -- KANA -- //

const requestKana = () => ({
  type: "REQUEST_KANA"
})

const receiveKana = kana => ({
  type: "RECEIVE_KANA",
  kana
})

export const fetchKana = () => dispatch => {
  dispatch(requestKana())
  return fetch("/api/v1/kana")
    .then(res => res.json())
    .then(json => dispatch(receiveKana(json)))
}

export const fetchKanaIfNeeded = () => (dispatch, getState) => {
  if (getState().kanaList.kana.length === 0) {
    return dispatch(fetchKana())
  }
}

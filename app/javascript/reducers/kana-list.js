const sortByGrid = list => {
  const kanaGrid = [
    "んわらやまはなたさかあ",
    "　ゐり　みひにちしきい",
    "　　るゆむふぬつすくう",
    "　ゑれ　めへねてせけえ",
    "　をろよもほのとそこお"
  ].join("").split("")

  return kanaGrid.map(kana => list.find(position => position.hiragana == kana))
}

const kanaList = (state = {
  isFetching: false,
  kana: [],
  kanaGrid: []
}, action) => {
  switch (action.type) {
    case "REQUEST_KANA":
      return {
        ...state,
        isFetching: true
      }
    case "RECEIVE_KANA":
      return {
        ...state,
        isFetching: false,
        kana: action.kana,
        kanaGrid: sortByGrid(action.kana)
      }
    default:
      return state
  }
}


export default kanaList

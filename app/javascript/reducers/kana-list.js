import { KANA_REQUEST, KANA_SUCCESS, KANA_FAILURE } from "actions";

const sortByGrid = list => {
  const kanaGrid = [
    "んわらやまはなたさかあ",
    "　ゐり　みひにちしきい",
    "　　るゆむふぬつすくう",
    "　ゑれ　めへねてせけえ",
    "　をろよもほのとそこお"
  ]
    .join("")
    .split("");

  return kanaGrid.map(kana => list.find(position => position.hiragana == kana));
};

const initialState = {
  isFetching: false,
  kana: [],
  kanaGrid: []
};

const kanaList = (state = initialState, action) => {
  switch (action.type) {
    case KANA_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case KANA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        kana: action.kana,
        kanaGrid: sortByGrid(action.kana)
      };
    case KANA_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default kanaList;

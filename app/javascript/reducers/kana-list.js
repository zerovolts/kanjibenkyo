import { KANA_REQUEST, KANA_RECEIVE } from "../actions";

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
    case KANA_RECEIVE:
      return {
        ...state,
        isFetching: false,
        kana: action.kana,
        kanaGrid: sortByGrid(action.kana)
      };
    default:
      return state;
  }
};

export default kanaList;

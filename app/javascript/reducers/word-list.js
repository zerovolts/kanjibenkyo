import { WORDS_REQUEST, WORDS_RECEIVE } from "actions";

const initialState = {
  isFetching: false,
  wordsByJlpt: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  }
};

const wordList = (state = initialState, action) => {
  switch (action.type) {
    case WORDS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case WORDS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        wordsByJlpt: {
          ...state.wordsByJlpt,
          [action.jlpt]: action.words.map(word => word.word)
        }
      };
    default:
      return state;
  }
};

export default wordList;

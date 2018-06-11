// -- KANJI -- //
export const KANJI_REQUEST = "KANJI_REQUEST";
export const KANJI_RECEIVE = "KANJI_RECEIVE";

const requestKanji = () => ({
  type: KANJI_REQUEST
});

const receiveKanji = kanji => ({
  type: KANJI_RECEIVE,
  kanji
});

export const fetchKanji = () => dispatch => {
  dispatch(requestKanji());
  return fetch("/api/v1/kanji")
    .then(res => res.json())
    .then(json => dispatch(receiveKanji(json)));
};

export const fetchKanjiIfNeeded = () => (dispatch, getState) => {
  if (getState().kanjiList.kanji.length === 0) {
    return dispatch(fetchKanji());
  }
};

// -- KANA -- //
export const KANA_REQUEST = "KANA_REQUEST";
export const KANA_RECEIVE = "KANA_RECEIVE";

const requestKana = () => ({
  type: KANA_REQUEST
});

const receiveKana = kana => ({
  type: KANA_RECEIVE,
  kana
});

export const fetchKana = () => dispatch => {
  dispatch(requestKana());
  return fetch("/api/v1/kana")
    .then(res => res.json())
    .then(json => dispatch(receiveKana(json)));
};

export const fetchKanaIfNeeded = () => (dispatch, getState) => {
  if (getState().kanaList.kana.length === 0) {
    return dispatch(fetchKana());
  }
};

// -- KANA QUIZ -- //
export const KANA_QUIZ_REQUEST = "KANA_QUIZ_REQUEST";
export const KANA_QUIZ_RECEIVE = "KANA_QUIZ_RECEIVE";
export const KANA_QUIZ_QUESTION_SELECT = "KANA_QUIZ_QUESTION_SELECT";
export const KANA_QUIZ_ANSWER_SUBMIT = "KANA_QUIZ_ANSWER_SUBMIT";
export const KANA_QUIZ_SUBMIT = "KANA_QUIZ_SUBMIT";
export const KANA_QUIZ_RECEIVE_RESULTS = "KANA_QUIZ_RECEIVE_RESULTS";

const requestKanaQuiz = () => ({
  type: KANA_QUIZ_REQUEST
});

const receiveKanaQuiz = kanaQuiz => ({
  type: KANA_QUIZ_RECEIVE,
  kanaQuiz
});

export const fetchKanaQuiz = () => dispatch => {
  dispatch(requestKanaQuiz());
  return fetch("/api/v1/quiz/kana")
    .then(res => res.json())
    .then(json => dispatch(receiveKanaQuiz(json)));
};

export const selectKanaQuizQuestion = id => {
  return {
    type: KANA_QUIZ_QUESTION_SELECT,
    id
  };
};

export const nextKanaQuizQuestion = () => (dispatch, getState) => {
  const { currentQuestionId, questions, answers } = getState().kanaQuiz;
  if (answers[currentQuestionId]) {
    if (currentQuestionId >= questions.length - 1) {
      dispatch(trySubmitKanaQuiz());
    } else {
      dispatch(selectKanaQuizQuestion(currentQuestionId + 1));
    }
  }
};

export const previousKanaQuizQuestion = () => (dispatch, getState) => {
  const { currentQuestionId } = getState().kanaQuiz;
  if (currentQuestionId > 0) {
    dispatch(selectKanaQuizQuestion(currentQuestionId - 1));
  }
};

const submitKanaQuizAnswer = answer => {
  return {
    type: KANA_QUIZ_ANSWER_SUBMIT,
    answer
  };
};

export const trySubmitKanaQuizAnswer = answer => (dispatch, getState) => {
  const { answers, currentQuestionId } = getState().kanaQuiz;
  if (!answers[currentQuestionId]) {
    dispatch(submitKanaQuizAnswer(answer));
  }
};

const submitKanaQuiz = () => (dispatch, getState) => {
  const { id, answers } = getState().kanaQuiz;
  const payload = {
    id: id,
    user_id: 1, //TODO: implement users in Redux
    answers: answers
  };
  dispatch({ type: KANA_QUIZ_SUBMIT });
  return fetch("/api/v1/quiz/kana/check", {
    credentials: "same-origin",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(json => dispatch({ type: KANA_QUIZ_RECEIVE_RESULTS, results: json }));
};

export const trySubmitKanaQuiz = () => (dispatch, getState) => {
  const { questions, answers } = getState().kanaQuiz;
  const nonNullAnswerCount = answers.filter(answer => answer !== null).length;
  const totalQuestions = questions.length;

  if (nonNullAnswerCount === totalQuestions) {
    dispatch(submitKanaQuiz());
  }
};

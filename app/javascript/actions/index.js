import { callApi } from "utils/request";

// -- KANA -- //
export const KANA_REQUEST = "KANA_REQUEST";
export const KANA_SUCCESS = "KANA_SUCCESS";
export const KANA_FAILURE = "KANA_FAILURE";

const requestKana = () => ({
  type: KANA_REQUEST
});

const receiveKana = kana => ({
  type: KANA_SUCCESS,
  kana
});

export const fetchKana = () => dispatch => {
  dispatch(requestKana());
  return callApi("/api/v1/kana").then(json => dispatch(receiveKana(json)));
};

export const fetchKanaIfNeeded = () => (dispatch, getState) => {
  if (getState().kanaList.kana.length === 0) {
    return dispatch(fetchKana());
  }
};

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
  return callApi("/api/v1/kanji").then(json => dispatch(receiveKanji(json)));
};

export const fetchKanjiIfNeeded = () => (dispatch, getState) => {
  if (getState().kanjiList.kanji.length === 0) {
    return dispatch(fetchKanji());
  }
};

// -- WORDS -- //
export const WORDS_REQUEST = "WORDS_REQUEST";
export const WORDS_RECEIVE = "WORDS_RECEIVE";

const requestWords = jlpt => ({
  type: WORDS_REQUEST,
  jlpt
});

const receiveWords = (jlpt, words) => ({
  type: WORDS_RECEIVE,
  jlpt,
  words
});

const fetchWords = jlpt => dispatch => {
  dispatch(requestWords(jlpt));
  return callApi(`/api/v1/words/jlpt/${jlpt}`).then(json =>
    dispatch(receiveWords(jlpt, json))
  );
};

export const fetchWordsIfNeeded = jlpt => (dispatch, getState) => {
  const words = getState().wordList.wordsByJlpt[jlpt];
  if (words.length === 0) {
    return dispatch(fetchWords(jlpt));
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
  return callApi("/api/v1/quiz/kana").then(json =>
    dispatch(receiveKanaQuiz(json))
  );
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
    answers: answers
  };
  dispatch({ type: KANA_QUIZ_SUBMIT });
  return callApi("/api/v1/quiz/kana/check", {
    // credentials: "same-origin",
    body: JSON.stringify(payload)
  }).then(json => dispatch({ type: KANA_QUIZ_RECEIVE_RESULTS, results: json }));
};

export const trySubmitKanaQuiz = () => (dispatch, getState) => {
  const { questions, answers } = getState().kanaQuiz;
  const nonNullAnswerCount = answers.filter(answer => answer !== null).length;
  const totalQuestions = questions.length;

  if (nonNullAnswerCount === totalQuestions) {
    dispatch(submitKanaQuiz());
  }
};

// -- LOGIN -- //
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
});

export const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  auth_token: user.auth_token
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
});

export const loginUser = creds => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${creds.username}&password=${creds.password}`
  };

  return dispatch => {
    dispatch(requestLogin(creds));

    return fetch("/authenticate", config)
      .then(res => res.json().then(user => ({ user, res })))
      .then(({ user, res }) => {
        if (!res.ok) {
          dispatch(loginError("Invalid username or password."));
          return Promise.reject(user);
        } else {
          localStorage.setItem("auth_token", user.auth_token);
          dispatch(receiveLogin(user));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
};

// -- LOGOUT -- //
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem("auth_token");
    dispatch(receiveLogout());
  };
}

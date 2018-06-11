export const fetchUser = () => fetch("/current-user").then(res => res.json());

export const fetchQuestion = () =>
  fetch("/api/v1/quiz/kana").then(res => res.json());

export const fetchKanji = () => fetch("/api/v1/kanji").then(res => res.json());

// export const submitAnswer = payload => (
//   fetch("/api/v1/quiz/kana/check", {
//     method: "POST",
//     body: JSON.stringify(payload),
//     credentials: "same-origin",
//     headers: {"Content-Type": "application/json"},
//   }).then(res => res.json())
// )

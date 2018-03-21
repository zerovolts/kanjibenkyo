import KanaQuiz from "./kana-quiz"
import KanaList from "./kana-list"
import CurrentUser from "./current-user"

const store = {}
store.kanaQuiz = new KanaQuiz()
store.kanaList = new KanaList()
store.currentUser = new CurrentUser()

export default store

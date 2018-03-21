import {observable, computed} from "mobx"

class CurrentUser {
  @observable login = null
  @observable userData = {}

  signIn() {

  }

  signOut() {
    if (login) {
      // handle sign out
    }
  }
}

export default CurrentUser

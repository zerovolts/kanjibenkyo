import {observable, computed} from "mobx"

class KanaList {
  @observable all = []
  @observable sortFunction = list => list.sort((a, b) => b.rating - a.rating)

  @computed get filtered() {
    const sortedKana = this.sortFunction(this.all)
    return sortedKana
  }

  fetchAllKana(callback) {
    fetch("/api/v1/kana")
      .then(res => res.json())
      .then(data => {
        this.all = data
        callback ? callback() : null
      })
  }
}

export default KanaList

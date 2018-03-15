import {observable, computed} from "mobx"

class KanaList {
  @observable all = []
  @observable sortFunction = list => list.sort((a, b) => b.rating - a.rating)
  @observable filters = {
    standard: true,
    dakuten: false,
    handakuten: false,
    youon: false,
    obsolete: false
  }

  constructor() {
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  @computed get filtered() {
    const filteredKana = this.all.filter(kana => {
      const hideDakuten = kana.dakuten && this.filters.dakuten
      const hideHandakuten = kana.handakuten && this.filters.handakuten
      const hideYouon = kana.youon && this.filters.youon
      const hideObsolete = kana.obsolete && this.filters.obsolete
      const hideStandard = !kana.dakuten && !kana.handakuten && !kana.youon && !kana.obsolete && this.filters.standard

      return (hideStandard || hideDakuten || hideHandakuten || hideYouon || hideObsolete)
    })

    const sortedKana = this.sortFunction(filteredKana)

    return sortedKana
  }

  fetchAllKana() {
    fetch("/api/v1/kana")
      .then(res => res.json())
      .then(data => {
        this.all = data
      })
  }

  toggleFilter(event) {
    this.filters[event.target.value] = event.target.checked
  }
}

export default KanaList

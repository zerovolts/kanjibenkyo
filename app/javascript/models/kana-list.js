import {observable, computed} from "mobx"

const sortByRating = (list) => list.sort((a, b) => b.rating - a.rating)

//wrymhntsk
const sortByGrid = (list) => {
  const kanaList = "んわらやまはなたさかあ　ゐり　みひにちしきい　　るゆむふぬつすくう　ゑれ　めへねてせけえ　をろよもほのとそこお"
  // const n = list.find(kana => kana.consonant == "n" && kana.vowel == null)
  // const aGroup = list.filter(kana => kana.vowel == "a").sort()
  // const iGroup = list.filter(kana => kana.vowel == "i")
  // const uGroup = list.filter(kana => kana.vowel == "u")
  // const eGroup = list.filter(kana => kana.vowel == "e")
  // const oGroup = list.filter(kana => kana.vowel == "o")

  return kanaList.split("").map(kana => list.find(entry => entry.hiragana == kana))
}

class KanaList {
  @observable all = []
  @observable sortFunction = sortByGrid

  @computed get sorted() {
    return this.sortFunction(this.all)
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

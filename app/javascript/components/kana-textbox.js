import React from "react"
import { Map } from "immutable"

const romajiList = [
  "a", "i", "u", "e", "o",
  "ka", "ki", "ku", "ke", "ko",
  "sa", "shi", "su", "se", "so",
  "ta", "chi", "tsu", "te", "to",
  "na", "ni", "nu", "ne", "no",
  "ha", "hi", "fu", "he", "ho",
  "ma", "mi", "mu", "me", "mo",
  "ya", "yu", "yo",
  "ra", "ri", "ru", "re", "ro",
  "wa", "wi", "we", "wo",
  "nn"
] //TODO: add dakuten, handakuten, and youon forms
const kanaList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん".split("")
const kanaMap = romajiList.reduce((acc, cur, i) => acc.set(cur, kanaList[i]), Map()).toJS()
const consonants = "kstcnhfmyrw"
const vowels = "aiueo"

const romajiToKana = (romaji) => {
  let splitRomaji = []
  let currentKana = ""

  for (let i = 0; i < romaji.length; i++) {
    if (consonants.includes(romaji[i])) {
      currentKana += romaji[i]
      if (currentKana == "nn") {
        splitRomaji.push(currentKana)
        currentKana = "" 
      }
    } else {
      currentKana += romaji[i]
      splitRomaji.push(currentKana)
      currentKana = ""
    }
  }
  splitRomaji.push(currentKana)
  return splitRomaji.map(c => kanaMap[c] ? kanaMap[c] : c).join("")
}

class KanaTextbox extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: romajiToKana(event.target.value)
    })
  }

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange}></input>
    )
  }
}

export default KanaTextbox
import React from "react"
import {observer, inject} from "mobx-react"

import CharacterBlock from "../components/character-block"
import RadioButton from "../components/radio-button"
import Loader from "../components/loader"

@inject("store") @observer
class KanaList extends React.Component {
  state = {
    kanaType: "hiragana"
  }

  componentDidMount() {
    store.kanaList.fetchAllKana()
  }

  changeKanaType = (kanaType) => {
    this.setState({ kanaType: kanaType })
  }

  render() {
    const kanaList = store.kanaList
    const {kanaType} = this.state

    const kanaCards = kanaList.sorted.map(kana =>
      kana ? <CharacterBlock
        key={kana.hiragana}
        character={kana[kanaType]}
        rating={kana.rating}
        url={"/kana/" + kana.hiragana} /> : <div className="blank-block" />
    )

    return (
      <React.Fragment>
      <div className="kana-list-header">
        <div className="kana-label">Kana: {kanaList.all.length}</div>
        <div className="language-buttons">
          <div className="radio-horizontal">
            <RadioButton
                value="hiragana"
                selected={kanaType}
                onChange={this.changeKanaType}>
              Hiragana
            </RadioButton>

            <RadioButton
                value="katakana"
                selected={kanaType}
                onChange={this.changeKanaType}>
              Katakana
            </RadioButton>

            <RadioButton
                value="romaji"
                selected={kanaType}
                onChange={this.changeKanaType}>
              Rōmaji
            </RadioButton>
          </div>
        </div>
      </div>
        <div className="kana-list">
          {kanaCards}
        </div>
      </React.Fragment>
    )
  }
}

// <button onClick={() => this.changeKanaType("hiragana")}>Hiragana</button>
// <button onClick={() => this.changeKanaType("katakana")}>Katakana</button>
// <button onClick={() => this.changeKanaType("romaji")}>Romaji</button>

export default KanaList

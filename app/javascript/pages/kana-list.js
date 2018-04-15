import React from "react"
import {observer, inject} from "mobx-react"

import CharacterBlock from "../components/character-block"
import Loader from "../components/loader"

@inject("store") @observer
class KanaList extends React.Component {
  componentDidMount() {
    store.kanaList.fetchAllKana()
  }

  render() {
    const kanaList = store.kanaList

    const kanaCards = kanaList.sorted.map(kana =>
      kana ? <CharacterBlock
        key={kana.hiragana}
        character={kana.hiragana}
        rating={kana.rating}
        url={"/kana/" + kana.hiragana} /> : <div className="blank-block"/>
    )

    return (
      <React.Fragment>
        <div className="kana-label">Kana: {kanaList.all.length}</div>
        <div className="kana-list">
          {kanaCards}
        </div>
      </React.Fragment>
    )
  }
}

export default KanaList

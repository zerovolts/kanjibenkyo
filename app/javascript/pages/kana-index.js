import React from "react"
import {observer, inject} from "mobx-react"

import CharacterBlock from "../components/character-block"

@inject("store") @observer
class KanaIndex extends React.Component {
  componentDidMount() {
    store.kanaList.fetchAllKana()
  }

  render() {
    const kanaList = store.kanaList

    const filterCheckBoxes = Object.keys(kanaList.filters).map(filterName =>
      <label className="filter">
        {filterName}
        <input
          type="checkbox"
          key={filterName}
          value={filterName}
          checked={kanaList.filters[filterName]}
          onChange={kanaList.toggleFilter}
        />
      </label>
    )

    const kanaCards = kanaList.filtered.map(kana =>
      <CharacterBlock
        character={kana.hiragana}
        rating={kana.rating}
        url={"/kana/" + kana.hiragana}
      />
    )

    return (
      <div>
        <div className="kana-label">Kana: {kanaList.filtered.length}</div>
        <div className="filters">
          {filterCheckBoxes}
        </div>
        <div className="kana-list">
          {kanaCards}
        </div>
      </div>
    )
  }
}

export default KanaIndex

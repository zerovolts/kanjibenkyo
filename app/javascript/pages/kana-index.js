import React from "react"
import {observer, inject} from "mobx-react"

import CharacterBlock from "../components/character-block"
import FilterCheckbox from "./kana-index/filter-checkbox"

@inject("store") @observer
class KanaIndex extends React.Component {
  componentDidMount() {
    store.kanaList.fetchAllKana()
  }

  render() {
    const kanaList = store.kanaList

    const filterCheckboxes = Object.keys(kanaList.filters).map(filterName =>
      <FilterCheckbox
        name={filterName}
        key={filterName}
        checked={kanaList.filters[filterName]}
        toggleFunction={kanaList.toggleFilter}
      />
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
          {filterCheckboxes}
        </div>
        <div className="kana-list">
          {kanaCards}
        </div>
      </div>
    )
  }
}

export default KanaIndex

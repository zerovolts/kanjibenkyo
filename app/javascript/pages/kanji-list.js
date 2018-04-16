import React from "react"
import CharacterBlock from "../components/character-block"

import {fetchKanji} from "../utils/request"

class KanjiList extends React.Component {
  state = {
    kanji: []
  }

  componentDidMount() {
    fetchKanji().then(data => {
      this.setState({
        kanji: data
      })
    })
  }

  render() {
    const {jlpt, kanji} = this.state

    const kanjiGroups = [5, 4, 3, 2, 1].map(jlpt => kanji.filter(kanji => kanji.jlpt == jlpt))

    const kanjiCards = kanjiGroups.map(kanjiGroup => {
      const kanjiGroupCards = kanjiGroup.map(kanji => {
        return (
          <CharacterBlock
            key={kanji.character}
            character={kanji.character}
            url={"/kanji/" + kanji.character} />
        )
      })

      return (
        <React.Fragment>
          <div >{
            kanjiGroup[0]
              ? <div className="group-header"><hr />{"N" + kanjiGroup[0].jlpt} ({kanjiGroup.length})<hr /></div>
              : ""}
          </div>
          <div className="kanji-list">
            {kanjiGroupCards}
          </div>
        </React.Fragment>
      )
    })

    return (
      <div>
        <div className="kanji-label">Kanji: {this.state.kanji.length}</div>
        {kanjiCards}
      </div>
    )
  }
}

export default KanjiList

import React from "react"
import CharacterBlock from "../components/character-block"

import {fetchKanji} from "../utils/request"

class KanjiIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kanji: []
    }
  }

  componentDidMount() {
    fetchKanji().then(data => {
      this.setState({
        kanji: data
      })
    })
  }

  render() {
    const kanjiCards = this.state.kanji.map(kanji => {
      const kunyomi = kanji.kunyomi.map(reading =>
        <div className="kana-alternative">{reading}</div>
      )

      const onyomi = kanji.onyomi.map(reading =>
        <div className="kana-alternative">{reading}</div>
      )

      const meaning = kanji.meaning.map(definition =>
        <div className="kana-alternative">{definition}</div>
      )

      return (
        <CharacterBlock
          character={kanji.character}
          url={"/kanji/" + kanji.character}
        />
      )
    })

    return (
      <div>
        <div className="kana-label">Kanji: {this.state.kanji.length}</div>
        <div className="kana-list">
          {kanjiCards}
        </div>
      </div>
    )
  }
}

export default KanjiIndex

import React from "react"

import {fetchKanji} from "../request"

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
        <div className="kana-block" key={kanji.character}>
          <h2 className="kana-title">{kanji.character}</h2>
          {/*<div className="kana-alternatives">{kunyomi}{onyomi}</div>*/}
        </div>
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

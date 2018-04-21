import React from "react"
import {Link} from "react-router-dom"

import ProgressBar from "../components/progress-bar"

class KanjiShow extends React.Component {
  state = {
    kanji: {}
  }

  componentDidMount() {
    this.fetchKanji(this.props.match.params.kanji)
  }

  fetchKanji(character) {
    fetch(`/api/v1/kanji/${character}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kanji: data
        })
      })
  }

  render() {
    const { kanji } = this.state

    const kunyomi = kanji.kunyomi
      ? kanji.kunyomi.filter(a => a.length > 0).sort((a, b) => a[0] === "-" ? 1 : 0).map((word, i) => {
          const splitWord = word.split(".")
          const root = splitWord[0]
          const okurigana = <span className="okurigana">{splitWord[1]}</span>
          const block = root[0] == "-"
            ? <div className="kunyomi kunyomi-uncommon">{root.slice(1, root.length)}{okurigana}</div>
            : <div className="kunyomi">{root}{okurigana}</div>

          return (
            <div key={word + i}>
              {block}
            </div>
          )
        })
      : null

    const onyomi = kanji.onyomi ? kanji.onyomi.map((word, i) => {
      if (word.includes(".")) {
        return null
      }

      return (
        <div key={word + i} className="onyomi">
          {word}
        </div>
      )
    }) : null

    return (
      <div className="kana-show">
        <ProgressBar percent={kanji.rating} />
        <div className="kana-header">
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-left"></i>
          </Link>
          <h1 className="character-header">
            {kanji.character}
          </h1>
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>

        <div className="info-section">
          <div className="info-section-label">kun'yomi</div>
          <div className="info-section-body">{kunyomi}</div>
          <div className="info-section-label">on'yomi</div>
          <div className="info-section-body">{onyomi}</div>
          <div className="info-section-label">meaning</div>
          <div className="info-section-body">{kanji.meaning ? kanji.meaning.join(", ") : null}</div>
        </div>
      </div>
    )
  }
}

// {kanji.kunyomi ? kanji.kunyomi.join(", ") : null}

export default KanjiShow

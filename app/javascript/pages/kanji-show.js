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
    const kanji = this.state.kanji

    const kunyomi = kanji.kunyomi ? kanji.kunyomi.map((word, i) => {
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
    }) : null

    const onyomi = kanji.onyomi ? kanji.onyomi.map((word, i) => {
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
        <table>
          <tbody>
            <tr>
              <td>kun'yomi</td>
              <td className="yomi-section">{kunyomi}</td>
            </tr>
            <tr>
              <td>on'yomi</td>
              <td className="yomi-section">{onyomi}</td>
              </tr>
            <tr>
              <td>meaning</td>
              <td>{kanji.meaning ? kanji.meaning.join(", ") : null}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

// {kanji.kunyomi ? kanji.kunyomi.join(", ") : null}

export default KanjiShow

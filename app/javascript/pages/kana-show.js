import React from "react"
import { Link } from "react-router-dom"

import ProgressBar from "../components/progress-bar"

class KanaShow extends React.Component {
  state = {
    kana: {}
  }

  componentDidMount() {
    this.fetchKana(this.props.match.params.kana)
  }

  fetchKana(hiragana = "random") {
    fetch(`/api/v1/kana/${hiragana}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kana: data
        })
      })
  }

  render() {
    const { kana } = this.state

    return (
      <div className="kana-show">
        <ProgressBar percent={kana.rating} />
        <div className="kana-header">
          <Link to={`/kana/${"あ"}`}>
            <i className="fas fa-angle-left"></i>
          </Link>
          <h1 className="character-header">
            {kana.hiragana}
          </h1>
          <Link to={`/kana/${"あ"}`}>
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>
        <table>
          <tbody>
            <tr><td>hiragana</td><td>{kana.hiragana}</td></tr>
            <tr><td>katakana</td><td>{kana.katakana}</td></tr>
            <tr><td>romaji</td><td>{kana.romaji}</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default KanaShow

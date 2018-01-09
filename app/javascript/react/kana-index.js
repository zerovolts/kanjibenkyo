import React from "react"

class KanaIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kanaList: []
    }

    this.fetchKanaList = this.fetchKanaList.bind(this)
  }

  componentDidMount() {
    this.fetchKanaList()
  }

  fetchKanaList() {
    fetch("/api/v1/kana")
      .then(res => res.json())
      .then(data => {
        this.setState({
          kanaList: data
        })
      })
  }

  render() {
    const kanaList = this.state.kanaList.map(kana =>
      <div className="kana-block" key={kana.hiragana}>
        <h2 className="kana-title">{kana.hiragana}</h2>
        <div>hiragana: {kana.hiragana}</div>
        <div>katakana: {kana.katakana}</div>
        <div>romaji: {kana.romaji}</div>
      </div>
    )

    return (
      <div className="kana-list">
        {kanaList}
      </div>
    )
  }
}

export default KanaIndex

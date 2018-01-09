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
        <div className="kana-alternatives">
          <div className="kana-alternative">{kana.hiragana}</div>
          <div className="kana-alternative">{kana.katakana}</div>
          <div className="kana-alternative">{kana.romaji}</div>
        </div>
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

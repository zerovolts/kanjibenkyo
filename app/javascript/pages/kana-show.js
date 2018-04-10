import React from "react"
import {observer, inject} from "mobx-react"
import {Link} from "react-router-dom"

@inject("store") @observer
class KanaShow extends React.Component {
  state = {
    kana: {},
    prevKana: null,
    nextKana: null
  }

  componentDidMount() {
    this.fetchKana(this.props.match.params.kana)

    if (store.kanaList.all.length == 0) {
      store.kanaList.fetchAllKana(this.updatePrevNext)
    }
  }

  updatePrevNext = () => {
    const kanaList = store.kanaList.filtered.map(kana => kana.hiragana)
    const index = kanaList.indexOf(this.state.kana.hiragana)
    const prevKana = (index <= 0)
      ? kanaList[kanaList.length - 1]
      : kanaList[index - 1]
    const nextKana = (index >= kanaList.length - 1)
      ? kanaList[0]
      : kanaList[index + 1]


    this.setState({
      prevKana: prevKana,
      nextKana: nextKana
    })
  }

  fetchKana(hiragana = "random") {
    fetch(`/api/v1/kana/${hiragana}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kana: data
        })
        this.updatePrevNext()
      })
  }

  render() {
    const {kana, prevKana, nextKana} = this.state

    return (
      <div className="kana-show">
        {kana.rating}
        <div className="kana-header">
          <Link to={`/kana/${prevKana}`} onClick={() => this.fetchKana(prevKana)}>
            <i className="fas fa-angle-left"></i>
          </Link>
          <h1 className="character-header">
            {kana.hiragana}
          </h1>
          <Link to={`/kana/${nextKana}`} onClick={() => this.fetchKana(nextKana)}>
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

import React from "react"

import { ichidanToPast, ichidanToNegative, godanToPast, godanToNegative } from "katsuyo"
import KanaTextbox from "../components/kana-textbox"

class VerbConjugator extends React.Component {
  state = {
    verb: "見る"
  }

  changeVerb = (verb) => {
    this.setState({
      verb: verb
    })
  }

  render() {
    const { verb } = this.state
    const verbType = verb.slice(-1) === "る" ? "ichidan" : "godan"
    const conjugations = {
      past: verbType === "ichidan" ? ichidanToPast(verb) : godanToPast(verb),
      negative: verbType === "ichidan" ? ichidanToNegative(verb) : godanToNegative(verb)
    }

    return (
      <div className="verb-conjugator">
        <h1>Verb Conjugator</h1>
        <button onClick={() => this.changeVerb("見る")}>見る</button>
        <button onClick={() => this.changeVerb("聞く")}>聞く</button>
        <button onClick={() => this.changeVerb("言う")}>言う</button>
        <button onClick={() => this.changeVerb("住む")}>住む</button>
        <table style={{marginTop: "2rem"}}>
          <tbody>
            <tr><td>past</td><td>{conjugations.past}</td></tr>
            <tr><td>negative</td><td>{conjugations.negative}</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default VerbConjugator
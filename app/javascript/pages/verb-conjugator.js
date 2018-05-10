import React from "react"

import { inflect, InflectionTypes, WordTypes } from "katsuyo"
import KanaTextbox from "../components/kana-textbox"

const { PAST, NEGATIVE, DESIRE } = InflectionTypes
const { VERB_ICHIDAN, VERB_GODAN } = WordTypes
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
    const category = verb.slice(-1) === "る" ? VERB_ICHIDAN : VERB_GODAN
    const word = {word: verb, category: category, inflections: []}
    const conjugations = {
      past: inflect({...word, inflections: [PAST]}).word,
      negative: inflect({...word, inflections: [NEGATIVE]}).word,
      desire: inflect({...word, inflections: [DESIRE]}).word,
    }
    const conjugationsPast = {
      past: inflect({...word, inflections: [PAST, NEGATIVE]}).word,
      negative: inflect({...word, inflections: [NEGATIVE, NEGATIVE]}).word,
      desire: inflect({...word, inflections: [NEGATIVE, DESIRE]}).word,
    }
   const conjugationBlocks = Object.keys(conjugations).map(key => (
      <tr>
        <td>{key}</td>
        <td>{conjugations[key]}</td>
        <td>{conjugationsPast[key]}</td>
      </tr>
    ))
    

    return (
      <div className="verb-conjugator">
        <h1>Verb Conjugator</h1>
        <button onClick={() => this.changeVerb("見る")}>見る</button>
        <button onClick={() => this.changeVerb("聞く")}>聞く</button>
        <button onClick={() => this.changeVerb("言う")}>言う</button>
        <button onClick={() => this.changeVerb("住む")}>住む</button>
        <button onClick={() => this.changeVerb("話す")}>話す</button>
        <table className="verb-conjugator-table">
          <tbody>
            <tr>
              <td>{verb}</td>
              <td>positive</td>
              <td>negative</td>
            </tr>
            {conjugationBlocks}
          </tbody>
        </table>
      </div>
    )
  }
}

export default VerbConjugator
import React from "react"
import CharacterBlock from "../components/character-block"
import { connect } from "react-redux"

import { fetchKanjiIfNeeded } from "../actions"

class KanjiList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchKanjiIfNeeded())
  }

  render() {
    const { kanjiList } = this.props

    const kanjiGroups = [1, 2, 3, 4, 5, 6, null].map(grade => kanjiList.filter(kanji => kanji.grade == grade))

    const kanjiCards = kanjiGroups.map((kanjiGroup, i) => {
      const kanjiGroupCards = kanjiGroup.map(kanji => {
        return (
          <CharacterBlock
            key={kanji.character}
            character={kanji.character}
            url={"/kanji/" + kanji.character} />
        )
      })

      return (
        <div key={i}>
          <div>{
            kanjiGroup[0]
              ? <div className="group-header"><hr />{"Grade " + (kanjiGroup[0].grade || "S")} ({kanjiGroup.length})<hr /></div>
              : ""}
          </div>
          <div className="kanji-list">
            {kanjiGroupCards}
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="kanji-label">Kanji: {kanjiList.length}</div>
        {kanjiCards}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  kanjiList: state.kanjiList.kanji
})

export default connect(mapStateToProps)(KanjiList)

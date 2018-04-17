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

    const kanjiGroups = [5, 4, 3, 2, 1].map(jlpt => kanjiList.filter(kanji => kanji.jlpt == jlpt))

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
              ? <div className="group-header"><hr />{"N" + kanjiGroup[0].jlpt} ({kanjiGroup.length})<hr /></div>
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

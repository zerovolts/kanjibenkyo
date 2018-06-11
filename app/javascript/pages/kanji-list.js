import React from "react";
import CharacterBlock from "../components/character-block";
import { connect } from "react-redux";
import { List, OrderedMap } from "immutable";

import { fetchKanjiIfNeeded } from "../actions";
import RadioButton from "../components/radio-button";

const GRADE_LEVEL = "GRADE_LEVEL";
const STROKE_COUNT = "STROKE_COUNT";
const RADICAL = "RADICAL";

const sortByGradeLevel = kanji =>
  List(kanji)
    .groupBy(kanji => kanji.grade)
    .mapKeys(key => (key != null ? "Grade " + key : "Secondary School"))
    .sortBy((v, k) => k);

const sortByStrokeCount = kanji =>
  List(kanji)
    .groupBy(kanji => kanji.strokes)
    .sortBy((v, k) => k)
    .mapKeys(strokes => (strokes == 1 ? "1 stroke" : strokes + " strokes"));

const sortByRadical = kanji =>
  List(kanji)
    .groupBy(kanji => kanji.radical)
    .sortBy((v, k) => k);

const sortMethodToFunction = sortMethod => {
  switch (sortMethod) {
    case GRADE_LEVEL:
      return sortByGradeLevel;
    case STROKE_COUNT:
      return sortByStrokeCount;
    case RADICAL:
      return sortByRadical;
    default:
      return x => x;
  }
};

class KanjiList extends React.Component {
  state = {
    sortMethod: GRADE_LEVEL,
    shouldRender: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchKanjiIfNeeded());

    // if the kanji are already in memory when navigating to the page, the previous page will hang while they are being rendered - this resolves that issue.
    window.setTimeout(() => {
      this.startRender();
    }, 0);
  }

  startRender = () => {
    this.setState({
      shouldRender: true
    });
  };

  changeSortMethod = sortMethod => {
    this.setState({
      sortMethod: sortMethod,
      shouldRender: false
    });
  };

  render() {
    const { kanjiList } = this.props;
    const kanjiGroups = sortMethodToFunction(this.state.sortMethod)(kanjiList);

    let kanjiCards = null;
    if (this.state.shouldRender && kanjiList.length > 0) {
      kanjiCards = kanjiGroups.isEmpty()
        ? null
        : kanjiGroups
            .keySeq()
            .toArray()
            .map(name => {
              const kanjiList = kanjiGroups.get(name);
              const kanjiGroupCards = kanjiList
                .map(kanji => {
                  return (
                    <CharacterBlock
                      key={kanji.character}
                      character={kanji.character}
                      url={"/kanji/" + kanji.character}
                    />
                  );
                })
                .toArray();

              return (
                <div key={name}>
                  <div className="group-header">
                    <hr />
                    <div>
                      {name} ({kanjiList.size})
                    </div>
                    <hr />
                  </div>
                  <div className="kanji-list">{kanjiGroupCards}</div>
                </div>
              );
            });
    } else {
      kanjiCards = <div className="loading">Loading...</div>;
    }

    return (
      <div>
        <div className="kanji-list-header">
          <div className="kanji-label">Kanji: {kanjiList.length}</div>
          <div className="radio-horizontal">
            <RadioButton
              value={GRADE_LEVEL}
              selected={this.state.sortMethod}
              onChange={this.changeSortMethod}
              then={this.startRender}
            >
              Grade
            </RadioButton>

            <RadioButton
              value={STROKE_COUNT}
              selected={this.state.sortMethod}
              onChange={this.changeSortMethod}
              then={this.startRender}
            >
              Strokes
            </RadioButton>

            <RadioButton
              value={RADICAL}
              selected={this.state.sortMethod}
              onChange={this.changeSortMethod}
              then={this.startRender}
            >
              Radical
            </RadioButton>
          </div>
        </div>
        {kanjiCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  kanjiList: state.kanjiList.kanji
});

export default connect(mapStateToProps)(KanjiList);

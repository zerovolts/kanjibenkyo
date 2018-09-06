import React from "react";
import { connect } from "react-redux";
import { List } from "immutable";

import { fetchKanjiIfNeeded } from "actions";
import ListHeader from "components/list-header/list-header";
import CharacterBlock from "components/character-block/character-block";

import "./kanji-list.scss";

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

  renderKanjiGroups = (kanjiGroups, kanjiList) => {
    if (!this.state.shouldRender || kanjiList.length === 0) {
      return <div className="loading">Loading...</div>;
    }

    return (
      !kanjiGroups.isEmpty() &&
      kanjiGroups
        .keySeq()
        .toArray()
        .map(name => this.renderKanjiGroup(name, kanjiGroups.get(name)))
    );
  };

  renderKanjiGroup = (name, kanjiList) => {
    const kanjiGroupCards = kanjiList
      .map(kanji => kanji.character)
      .map(this.renderKanjiBlock)
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
  };

  renderKanjiBlock = kanji => (
    <CharacterBlock key={kanji} character={kanji} url={"/kanji/" + kanji} />
  );

  render() {
    const { kanjiList } = this.props;
    const kanjiGroups = sortMethodToFunction(this.state.sortMethod)(kanjiList);
    const kanjiCount = kanjiList.filter(kanji => kanji.rating != null).length;

    return (
      <div>
        <ListHeader
          title={`Kanji: ${kanjiCount} / ${kanjiList.length}`}
          options={[
            { name: "Grade", value: GRADE_LEVEL },
            { name: "Strokes", value: STROKE_COUNT },
            { name: "Radical", value: RADICAL }
          ]}
          optionSelection={this.state.sortMethod}
          onOptionChange={this.changeSortMethod}
          optionThen={this.startRender}
        />
        {this.renderKanjiGroups(kanjiGroups, kanjiList)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  kanjiList: state.kanjiList.kanji
});

export default connect(mapStateToProps)(KanjiList);

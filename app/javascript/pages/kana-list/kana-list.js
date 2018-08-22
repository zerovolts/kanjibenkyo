import React from "react";
import { connect } from "react-redux";

import { fetchKanaIfNeeded } from "actions";
import ListHeader from "components/list-header/list-header";
import CharacterBlock from "components/character-block/character-block";
import MultiProgressBar from "components/progress-bar/multi-progress-bar";

import "./kana-list.scss";

class KanaList extends React.Component {
  state = {
    kanaType: "hiragana"
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchKanaIfNeeded());
  }

  changeKanaType = kanaType => {
    this.setState({ kanaType: kanaType });
  };

  render() {
    const { kanaList, kanaGrid } = this.props;
    const { kanaType } = this.state;
    const kanaCount = kanaList.filter(kana => kana.rating != null).length;

    const kanaCards = kanaGrid.map(
      (kana, i) =>
        kana ? (
          <CharacterBlock
            key={kana.hiragana}
            character={kana[kanaType]}
            rating={kana.rating}
            url={"/kana/" + kana.hiragana}
          />
        ) : (
          <div key={i} className="blank-block" />
        )
    );

    const splits = kanaList
      .sort((a, b) => a.rating < b.rating)
      // .map(kana => `hsl(${kana.rating}, 75%, 50%);`)
      .reduce(
        (acc, cur) => {
          if (cur.rating === null) {
            return acc;
          } else if (cur.rating < 34) {
            return { ...acc, low: acc.low + 1 };
          } else if (cur.rating > 66) {
            return { ...acc, high: acc.high + 1 };
          } else {
            return { ...acc, mid: acc.mid + 1 };
          }
        },
        { low: 0, mid: 0, high: 0, total: kanaList.length }
      );

    const splitColors = [
      {
        color: "#f44",
        percent: (splits.low / kanaList.length) * 100
      },
      { color: "#fd4", percent: (splits.mid / kanaList.length) * 100 },
      {
        color: "#5d5",
        percent: (splits.high / kanaList.length) * 100
      }
    ];

    return (
      <React.Fragment>
        <ListHeader
          title={`Kana: ${kanaCount} / ${kanaList.length}`}
          options={[
            { name: "Hiragana", value: "hiragana" },
            { name: "Katakana", value: "katakana" },
            { name: "Rōmaji", value: "romaji" }
          ]}
          optionSelection={kanaType}
          onOptionChange={this.changeKanaType}
        />
        <MultiProgressBar sections={splitColors} />
        <div className="kana-list">{kanaCards}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  kanaList: state.kanaList.kana,
  kanaGrid: state.kanaList.kanaGrid
});

export default connect(mapStateToProps)(KanaList);

import React from "react";
import { connect } from "react-redux";

import { fetchKanaIfNeeded } from "actions";
import ListHeader from "components/list-header/list-header";
import CharacterBlock from "components/character-block/character-block";
import RadioButton from "components/radio-button/radio-button";

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

import React from "react";
import { connect } from "react-redux";

import { fetchKanaIfNeeded, fetchKanaQuiz } from "../actions";
import CharacterBlock from "../components/character-block";
import RadioButton from "../components/radio-button";

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
        <div className="kana-list-header">
          <div className="kana-label">
            Kana: {kanaCount} / {kanaList.length}
          </div>
          <div className="language-buttons">
            <div className="radio-horizontal">
              <RadioButton
                value="hiragana"
                selected={kanaType}
                onChange={this.changeKanaType}
              >
                Hiragana
              </RadioButton>

              <RadioButton
                value="katakana"
                selected={kanaType}
                onChange={this.changeKanaType}
              >
                Katakana
              </RadioButton>

              <RadioButton
                value="romaji"
                selected={kanaType}
                onChange={this.changeKanaType}
              >
                Rōmaji
              </RadioButton>
            </div>
          </div>
        </div>
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

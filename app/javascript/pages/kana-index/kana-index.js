import React from "react";

import IndexPage from "components/index-page/index-page";

const infoText =
  "Kana are similar to the English alphabet, but they represent syllables rather than consonants and vowels separately. There are 46 basic kana, with two variants for each: Hiragana (ひらがな) for native Japanese words and Katakana (カタカナ) for foreign loanwords. You should be able to read these reasonably well before starting to study Kanji.";

const KanaIndex = () => {
  return (
    <IndexPage
      title="Kana"
      shadowTitleLeft="かな"
      shadowTitleRight="カナ"
      body={infoText}
      linkList={[
        {
          url: "/list/kana",
          name: "Kana Grid",
          description:
            "An interactive grid of all kana and your skill with each one."
        },
        {
          url: "/study/kana",
          name: "Flashcards",
          description: "Study kana with flashcards."
        },
        {
          url: "/quiz/kana",
          name: "Kana Quiz",
          description:
            "Test your knowledge and update your Kana Grid skill colors."
        }
      ]}
    />
  );
};

export default KanaIndex;

import React from "react";

import IndexPage from "components/index-page/index-page";
import Word from "components/word/word";
import { WordTypes } from "components/word/word";

const infoText = "Most Japanese words fit into seven categories. ";

const WordIndex = () => {
  return (
    <IndexPage
      title="Words"
      shadowTitleLeft="単語"
      shadowTitleRight="単語"
      body={infoText}
      linkList={[
        {
          url: "/words/all",
          name: "Word Grid",
          description: "A grid of all words based on JLPT level."
        },
        {
          url: "/words/verb-conjugator",
          name: "Verb Conjugator",
          description:
            "An automated verb conjugator to teach the different conjugation patterns."
        }
      ]}
    >
      <ul>
        <li>
          い-Adjectives: <Word word="楽しい" type={WordTypes.ADJECTIVE} />、
          <Word word="寒い" type={WordTypes.ADJECTIVE} />、
          <Word word="辛い" type={WordTypes.ADJECTIVE} />
        </li>
        <li>
          な-Adjectives: <Word word="静か" type={WordTypes.ADJECTIVE} />、
          <Word word="綺麗" type={WordTypes.ADJECTIVE} />、
          <Word word="便利" type={WordTypes.ADJECTIVE} />
        </li>
        <li>
          Nouns: <Word word="猫" type={WordTypes.NOUN} />、
          <Word word="折り紙" type={WordTypes.NOUN} />、
          <Word word="天気" type={WordTypes.NOUN} />
        </li>
        <li>
          Ichidan (る) Verbs: <Word word="見る" type={WordTypes.VERB} />、
          <Word word="寝る" type={WordTypes.VERB} />、
          <Word word="落ちる" type={WordTypes.VERB} />
        </li>
        <li>
          Godan Verbs: <Word word="行く" type={WordTypes.VERB} />、
          <Word word="学ぶ" type={WordTypes.VERB} />、
          <Word word="落とす" type={WordTypes.VERB} />
        </li>
        <li>
          Adverbs: <Word word="沢山" type={WordTypes.ADVERB} />、
          <Word word="多分" type={WordTypes.ADVERB} />、
          <Word word="便利" type={WordTypes.ADVERB} />
        </li>
        <li>
          Particles: <Word word="を" type={WordTypes.PARTICLE} />、
          <Word word="と" type={WordTypes.PARTICLE} />、
          <Word word="から" type={WordTypes.PARTICLE} />
        </li>
      </ul>
    </IndexPage>
  );
};

export default WordIndex;

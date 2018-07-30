import React from "react";

import ContainerBlock from "components/container-block/container-block";
import Word, { WordTypes } from "components/word/word";

// 私は沢山餃子が好きです
// 台湾料理はインド料理ほど辛くない
// 彼女はテニスがとてもうまいが、私も同じ位うまい
const SentenceShow = () => {
  return (
    <ContainerBlock>
      <Word word="私" type={WordTypes.NOUN} />
      <Word word="は" type={WordTypes.PARTICLE} />
      <Word word="沢山" type={WordTypes.ADVERB} />
      <Word word="餃子" type={WordTypes.NOUN} />
      <Word word="が" type={WordTypes.PARTICLE} />
      <Word word="好き" type={WordTypes.NA_ADJECTIVE} />
      <Word word="です" type={WordTypes.VERB} />
      <div />
      <Word word="台湾" type={WordTypes.NOUN} />
      <Word word="料理" type={WordTypes.NOUN} />
      <Word word="は" type={WordTypes.PARTICLE} />
      <Word word="インド" type={WordTypes.NOUN} />
      <Word word="料理" type={WordTypes.NOUN} />
      <Word word="ほど" type={WordTypes.PARTICLE} />
      <Word word="辛くない" type={WordTypes.ADJECTIVE} />
      <div />
      <Word word="彼女" type={WordTypes.NOUN} />
      <Word word="は" type={WordTypes.PARTICLE} />
      <Word word="テニス" type={WordTypes.NOUN} />
      <Word word="が" type={WordTypes.PARTICLE} />
      <Word word="とても" type={WordTypes.ADVERB} />
      <Word word="うまい" type={WordTypes.ADJECTIVE} />
      <Word word="が" type={WordTypes.PARTICLE} />
      <Word word="、" type={WordTypes.PARTICLE} />
      <Word word="私" type={WordTypes.NOUN} />
      <Word word="も" type={WordTypes.PARTICLE} />
      <Word word="同じ" type={WordTypes.ADVERB} />
      <Word word="位" type={WordTypes.NOUN} />
      <Word word="うまい" type={WordTypes.ADJECTIVE} />
    </ContainerBlock>
  );
};

export default SentenceShow;

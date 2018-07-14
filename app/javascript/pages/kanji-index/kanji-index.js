import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";

const kanjiText =
  "Kanji (漢字) are Chinese characters that were adopted for written Japanese before Japan had a writing system of its own. Unlike Kana, Kanji each have multiple pronunciations and meanings associated with them, depending on the word they are being used in. There are thousands of Kanji in existence, but we will focus on the 2,136 jōyō kanji that are in regular use and taught in Japanese schools.";

const KanjiIndex = () => {
  return (
    <div className="home-block">
      <h1>
        <span className="shadow-title">漢字・</span>Kanji<span className="shadow-title">
          ・漢字
        </span>
      </h1>
      <ContainerBlock>
        <p>{kanjiText}</p>
        <hr />
        <div className="link-option">
          <p>
            <Link to="/list/kanji">Kanji Grid</Link> - A grid of all jōyō kanji,
            sortable by Grade Level, Stroke Count, and Radical.
          </p>
        </div>
      </ContainerBlock>
    </div>
  );
};

export default KanjiIndex;

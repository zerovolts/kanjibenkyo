import React from "react";

import IndexPage from "components/index-page/index-page";

const infoText =
  "Kanji (漢字) are Chinese characters that were adopted for written Japanese before Japan had a writing system of its own. Unlike Kana, Kanji each have multiple pronunciations and meanings associated with them, depending on the word they are being used in. There are thousands of Kanji in existence, but we will focus on the 2,136 jōyō kanji that are in regular use and taught in Japanese schools.";

const KanjiIndex = () => {
  return (
    <IndexPage
      title="Kanji"
      shadowTitleLeft="漢字"
      shadowTitleRight="漢字"
      body={infoText}
      linkList={[
        {
          url: "/list/kanji",
          name: "Kanji Grid",
          description:
            "A grid of all jōyō kanji, sortable by Grade Level, Stroke Count, and Radical."
        }
      ]}
    />
  );
};

export default KanjiIndex;

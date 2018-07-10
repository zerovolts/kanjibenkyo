import React from "react";

const KunyomiTag = ({ kunyomi }) => {
  const uncommon = kunyomi[0] == "（";
  if (uncommon) {
    kunyomi = kunyomi.slice(1, -1);
  }
  const [root, okurigana] = kunyomi.split("-");

  return (
    <div className={`kunyomi ${uncommon ? "kunyomi-uncommon" : ""}`}>
      {root}
      <span className="okurigana">{okurigana}</span>
    </div>
  );
};

export default KunyomiTag;

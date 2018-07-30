import React from "react";
import Markdown from "markdown-to-jsx";

import ContainerBlock from "components/container-block/container-block";
import Word from "components/word/word";

import "./article.scss";

const mdOptions = {
  overrides: {
    Word: {
      component: Word
    }
  }
};

const Article = ({ slug, content }) => {
  return (
    <div className="article">
      <ContainerBlock>
        <Markdown options={mdOptions} children={content} />
      </ContainerBlock>
    </div>
  );
};

export default Article;

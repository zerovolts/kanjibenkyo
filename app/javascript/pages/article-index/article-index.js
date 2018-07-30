import React from "react";

import Article from "pages/article/article";

const content = `
# Basic Verb Conjugation
There are 2 basic categories of verbs: Ichidan (る) Verbs and Godan Verbs.

## Ichidan Verbs（<Word word="一" type="word-noun" /><Word word="段" type="word-noun" /><Word word="動詞" type="word-noun">）
These are generally easier to conjugate, because they are quite regular. To make an ichidan verb past tense, you just remove the る and add た. Unfortunately, just because a verb ends in る does not mean it's necessarily an ichidan verb (see next section).

<div><Word type="word-verb" word="見る" />　→　<Word type="word-verb" word="見た" /></div>

## Godan Verbs（<Word word="五" type="word-noun" /><Word word="段" type="word-noun" /><Word word="動詞" type="word-noun">）
These are slightly more difficult. They conjugate differently depending on the last kana in the dictionary form of the verb. 

<div>う：<Word word="買う" type="word-verb" />　→　<Word word="買った" type="word-verb" /></div>
<div>つ：<Word word="持つ" type="word-verb" />　→　<Word word="持った" type="word-verb" /></div>
<div>る：<Word word="知る" type="word-verb" />　→　<Word word="知った" type="word-verb" /></div>
<br />
<div>ぬ：<Word word="死ぬ" type="word-verb" />　→　<Word word="死んだ" type="word-verb" /></div>
<div>む：<Word word="飲む" type="word-verb" />　→　<Word word="飲んだ" type="word-verb" /></div>
<div>ぶ：<Word word="学ぶ" type="word-verb" />　→　<Word word="学んだ" type="word-verb" /></div>
<br />
<div>く：<Word word="聞く" type="word-verb" />　→　<Word word="聞いた" type="word-verb" /></div>
<div>ぐ：<Word word="泳ぐ" type="word-verb" />　→　<Word word="泳いだ" type="word-verb" /></div>
<br />
<div>す：<Word word="話す" type="word-verb" />　→　<Word word="話した" type="word-verb" /></div>

## Irregular Verbs
Japanese is a very regular language in general, but there are a few exceptions.

<div><Word word="する" type="word-verb" />　→　<Word word="した" type="word-verb" /></div>
<div><Word word="来る" type="word-verb" />　→　<Word word="来た" type="word-verb" /></div>
<div>At first glance, this looks like a regular ichidan verb. But as with する, the first kana 来 changes from く to き.</div>
<br />
<div><Word word="行く" type="word-verb" />　→　<Word word="行った" type="word-verb" /></div>
<div>Grammatically, 行く should conjugate as 行いた. But then it would be ambiguous with 言いた, which shares the same pronunciation.</div>
`;

const article = {
  slug: "hello",
  content: content
};

const ArticleIndex = () => {
  return <Article {...article} />;
};

export default ArticleIndex;

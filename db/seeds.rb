# def create_kana(hiragana, katakana, romaji, consonant, vowel, dakuten, handakuten, youon)
#   Kana.create({
#     hiragana: hiragana,
#     katakana: katakana,
#     romaji: romaji,
#     consonant: consonant,
#     vowel: vowel,
#     dakuten: dakuten,
#     handakuten: handakuten,
#     youon: youon
#   })
# end
#
# def create_normal(hiragana, katakana, romaji, consonant, vowel)
#   create_kana(hiragana, katakana, romaji, consonant, vowel, false, false, nil)
# end
#
# create_normal("あ", "ア", "a", nil, "a")

normal_kana = [
  %w(あ ア a nil a),
  %w(い イ i nil i),
  %w(う ウ u nil u),
  %w(え エ e nil e),
  %w(お オ o nil o),

  %w(か カ ka k a),
  %w(き キ ki k i),
  %w(く ク ku k u),
  %w(け ケ ke k e),
  %w(こ コ ko k o),

  %w(さ サ sa s a),
  %w(し シ shi s i),
  %w(す ス su s u),
  %w(せ セ se s e),
  %w(そ ソ so s o),

  %w(た タ ta t a),
  %w(ち チ chi t i),
  %w(つ ツ tsu t u),
  %w(て テ te t e),
  %w(と ト to t o),

  %w(な ナ na n a),
  %w(に ニ ni n i),
  %w(ぬ ヌ nu n u),
  %w(ね ネ ne n e),
  %w(の ノ no n o),

  %w(は ハ ha h a),
  %w(ひ ヒ hi h i),
  %w(ふ フ fu h u),
  %w(へ ヘ he h e),
  %w(ほ ホ ho h o),

  %w(ま マ ma m a),
  %w(み ミ mi m i),
  %w(む ム mu m u),
  %w(め メ me m e),
  %w(も モ mo m o),

  %w(や ヤ ya y a),
  %w(ゆ ユ yu y u),
  %w(よ ヨ yo y o),

  %w(ら ラ ra r a),
  %w(り リ ri r i),
  %w(る ル ru r u),
  %w(れ レ re r e),
  %w(ろ ロ ro r o),

  %w(わ ワ wa w a),
  %w(を ヲ wo w o),

  %w(ん ン n n nil)
]

dakuten_kana = [
  %w(が ガ ga g a),
  %w(ぎ ギ gi g i),
  %w(ぐ グ gu g u),
  %w(げ ゲ ge g e),
  %w(ご ゴ go g o),

  %w(ざ ザ za z a),
  %w(じ ジ ji z i),
  %w(ず ズ zu z u),
  %w(ぜ ゼ ze z e),
  %w(ぞ ゾ zo z o),

  %w(だ ダ da d a),
  %w(ぢ ヂ ji d i),
  %w(づ ヅ zu d u),
  %w(で デ de d e),
  %w(ど ド do d o),

  %w(ば バ ba b a),
  %w(び ビ bi b i),
  %w(ぶ ブ bu b u),
  %w(べ ベ be b e),
  %w(ぼ ボ bo b o)
]

handakuten_kana = [
  %w(ぱ パ pa p a),
  %w(ぴ ピ pi p a),
  %w(ぷ プ pu p a),
  %w(ぺ ペ pe p a),
  %w(ぽ ポ po p a)
]

youon_kana = [
  %w(きゃ キャ kya ky a や),
  %w(きゅ キュ kyu ky u ゆ),
  %w(きょ キョ kyo ky o よ),

  %w(しゃ シャ sha sh a や),
  %w(しゅ シュ shu sh u ゆ),
  %w(しょ ショ sho sh o よ),

  %w(ちゃ チャ cha ch a や),
  %w(ちゅ チュ chu ch u ゆ),
  %w(ちょ チョ cho ch o よ),

  %w(にゃ ニャ nya ny a や),
  %w(にゅ ニュ nyu ny u ゆ),
  %w(にょ ニョ nyo ny o よ),

  %w(ひゃ ヒャ hya hy a や),
  %w(ひゅ ヒュ fyu hy u ゆ),
  %w(ひょ ヒョ hyo hy o よ),

  %w(みゃ ミャ mya my a や),
  %w(みゅ ミュ myu my u ゆ),
  %w(みょ ミョ myo my o よ),

  %w(りゃ リャ rya ry a や),
  %w(りゅ リュ ryu ry u ゆ),
  %w(りょ リョ ryo ry o よ)
]

dakuten_youon_kana = [
  %w(ぎゃ ギャ gya gy a や),
  %w(ぎゅ ギュ gyu gy u ゆ),
  %w(ぎょ ギョ gyo gy o よ),

  %w(じゃ ジャ ja j a や),
  %w(じゅ ジュ ju j u ゆ),
  %w(じょ ジョ jo j o よ),

  %w(びゃ ビャ bya by a や),
  %w(びゅ ビュ byu by u ゆ),
  %w(びょ ビョ byo by o よ)
]

handakuten_youon_kana = [
  %w(ぴゃ ピャ pya py a や),
  %w(ぴゅ ピュ pyu py u ゆ),
  %w(ぴょ ピョ pyo py o よ),
]

obsolete_kana = [
  %w(ゐ ヰ wi w i),
  %w(ゑ ヱ we w e)
]

normal_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3] == "nil" ? nil : group[3],
    vowel: group[4] == "nil" ? nil : group[4]
  })
end

dakuten_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    dakuten: true
  })
end

handakuten_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    handakuten: true
  })
end

youon_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    youon: group[5]
  })
end

dakuten_youon_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    youon: group[5],
    dakuten: true
  })
end

handakuten_youon_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    youon: group[5],
    handakuten: true
  })
end

obsolete_kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3],
    vowel: group[4],
    obsolete: true
  })
end

#---------------------#

kanji = [
  ["見", ["み"], ["ケン"], ["see"], 5],
  ["人", ["ひと"], ["ジン"], ["person"], 5],
  ["高", ["たか"], ["コウ"], ["high", "expensive"], 5],
  ["山", ["やま"], ["サン"], ["mountain"], 5],
  ["食", ["た", "く"], ["ショク"], ["eat"], 5],
  ["電", [], ["デン"], ["electricity"], 5],
  ["日", ["ひ", "か"], ["ニチ", "ジツ"], ["sun", "day"], 5],
  ["本", ["もと"], ["ホン"], ["book", "origin"], 5]
]

kanji.each do |character|
  Kanji.create({
    character: character[0],
    kunyomi: character[1],
    onyomi: character[2],
    meaning: character[3],
    jlpt: character[4]
  })
end

#---------------------#

User.create({
  login: "zerovolts",
  name: "Zach Stone",
  experience: 150
})

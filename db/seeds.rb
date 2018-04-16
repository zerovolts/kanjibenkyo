kana = [
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
  %w(ゐ ヰ wi w i),
  %w(ゑ ヱ we w e),
  %w(を ヲ wo w o),

  %w(ん ン n n nil)
]

kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    consonant: group[3] == "nil" ? nil : group[3],
    vowel: group[4] == "nil" ? nil : group[4],
    obsolete: (group[0] == "ゐ" || group[0] == "ゑ") ? true : false
  })
end

#---------------------#

def create_kanji(jlpt_level, kanji)
  kanji.each do |character|
    Kanji.create({
      character: character["character"],
      onyomi: character["onyomi"],
      kunyomi: character["kunyomi"],
      meaning: character["meaning"],
      jlpt: jlpt_level
    })
  end
end

require "json"
n5 = JSON.parse(File.read("db/data/kanji/n5.json"))
n4 = JSON.parse(File.read("db/data/kanji/n4.json"))
n3 = JSON.parse(File.read("db/data/kanji/n3.json"))
n2 = JSON.parse(File.read("db/data/kanji/n2.json"))
n1 = JSON.parse(File.read("db/data/kanji/n1.json"))

create_kanji(5, n5)
create_kanji(4, n4)
create_kanji(3, n3)
create_kanji(2, n2)
create_kanji(1, n1)

#---------------------#

Word.create({
  word: "見る",
  furigana: "みる",
  meaning: "to see",
  jlpt: 5
})

#---------------------#

User.create({
  login: "zerovolts",
  name: "Zach Stone",
  experience: 150
})

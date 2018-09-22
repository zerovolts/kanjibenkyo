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

puts "Creating Kana..."
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

def create_kanji(kanji)
  kanji.each do |character|
    Kanji.create({
      character: character["kanji"][0],
      onyomi: character["onyomi"],
      kunyomi: character["kunyomi"],
      meaning: [character["meaning"]],
      grade: character["grade"] == "S" ? nil : character["grade"],
      radical: character["radical"],
      strokes: character["strokes"]
    })
  end
end

require "json"
puts "Creating Kanji..."
create_kanji(JSON.parse(File.read("db/data/kanji.json")))

#---------------------#
def create_word(words, jlpt)
  words.each do |word|
    Word.create({
      word: word["word"],
      furigana: word["kana"],
      meaning: word["meaning"]&.map(&:strip),
      jlpt: jlpt
    })
  end
end

puts "Creating N5 Words..."
create_word(JSON.parse(File.read("db/data/words/n5.json")), 5)
puts "Creating N4 Words..."
create_word(JSON.parse(File.read("db/data/words/n4.json")), 4)
puts "Creating N3 Words..."
create_word(JSON.parse(File.read("db/data/words/n3.json")), 3)
puts "Creating N2 Words..."
create_word(JSON.parse(File.read("db/data/words/n2.json")), 2)
puts "Creating N1 Words..."
create_word(JSON.parse(File.read("db/data/words/n1.json")), 1)

#---------------------#

User.create({
  login: "zerovolts",
  name: "Zach Stone",
  experience: 150
})

kana = [
  %w(あ ア a 0 あ),
  %w(い イ i 0 い),
  %w(う ウ u 0 う),
  %w(え エ e 0 え),
  %w(お オ o 0 お),

  %w(か カ ka 1 あ),
  %w(き キ ki 1 い),
  %w(く ク ku 1 う),
  %w(け ケ ke 1 え),
  %w(こ コ ko 1 お),

  %w(さ サ sa 2 あ),
  %w(し シ shi 2 い),
  %w(す ス su 2 う),
  %w(せ セ se 2 え),
  %w(そ ソ so 2 お),

  %w(た タ ta 3 あ),
  %w(ち チ chi 3 い),
  %w(つ ツ tsu 3 う),
  %w(て テ te 3 え),
  %w(と ト to 3 お),

  %w(な ナ na 4 あ),
  %w(に ニ ni 4 い),
  %w(ぬ ヌ nu 4 う),
  %w(ね ネ ne 4 え),
  %w(の ノ no 4 お),

  %w(は ハ ha 5 あ),
  %w(ひ ヒ hi 5 い),
  %w(ふ フ fu 5 う),
  %w(へ ヘ he 5 え),
  %w(ほ ホ ho 5 お),

  %w(ま マ ma 6 あ),
  %w(み ミ mi 6 い),
  %w(む ム mu 6 う),
  %w(め メ me 6 え),
  %w(も モ mo 6 お),

  %w(や ヤ ya 7 あ),
  %w(ゆ ユ yu 7 う),
  %w(よ ヨ yo 7 お),

  %w(ら ラ ra 8 あ),
  %w(り リ ri 8 い),
  %w(る ル ru 8 う),
  %w(れ レ re 8 え),
  %w(ろ ロ ro 8 お),

  %w(わ ワ wa 9 あ),
  %w(を ヲ wo 9 お),

  %w(ん ン n 10 ん)
]

kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    level: group[3].to_i,
    rhyme: group[4]
  })
end

User.create({
  login: "zerovolts",
  name: "Zach Stone",
  experience: 150
})

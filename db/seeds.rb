kana = [
  %w(あ ア a 0),
  %w(い イ i 0),
  %w(う ウ u 0),
  %w(え エ e 0),
  %w(お オ o 0),

  %w(か カ ka 1),
  %w(き キ ki 1),
  %w(く ク ku 1),
  %w(け ケ ke 1),
  %w(こ コ ko 1),

  %w(さ サ sa 2),
  %w(し シ shi 2),
  %w(す ス su 2),
  %w(せ セ se 2),
  %w(そ ソ so 2),

  %w(た タ ta 3),
  %w(ち チ chi 3),
  %w(つ ツ tsu 3),
  %w(て テ te 3),
  %w(と ト to 3),

  %w(な ナ na 4),
  %w(に ニ ni 4),
  %w(ぬ ヌ nu 4),
  %w(ね ネ ne 4),
  %w(の ノ no 4),

  %w(は ハ ha 5),
  %w(ひ ヒ hi 5),
  %w(ふ フ fu 5),
  %w(へ ヘ he 5),
  %w(ほ ホ ho 5),

  %w(ま マ ma 6),
  %w(み ミ mi 6),
  %w(む ム mu 6),
  %w(め メ me 6),
  %w(も モ mo 6),

  %w(や ヤ ya 7),
  %w(ゆ ユ yu 7),
  %w(よ ヨ yo 7),

  %w(ら ラ ra 8),
  %w(り リ ri 8),
  %w(る ル ru 8),
  %w(れ レ re 8),
  %w(ろ ロ ro 8),

  %w(わ ワ wa 9),
  %w(を ヲ wo 9),

  %w(ん ン n 10)
]

kana.each do |group|
  Kana.create({
    hiragana: group[0],
    katakana: group[1],
    romaji: group[2],
    level: group[3].to_i
  })
end

User.create({
  login: "zerovolts",
  name: "Zach Stone",
  experience: 150
})

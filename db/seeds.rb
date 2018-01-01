# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create(%w({ name: 'Star Wars' }, { name: 'Lord of the Rings' }))
#   Character.create(name: 'Luke', movie: movies.first)

kana = [
  %w(あ ア a),
  %w(い イ i),
  %w(う ウ u),
  %w(え エ e),
  %w(お オ o),

  %w(か カ ka),
  %w(き キ ki),
  %w(く ク ku),
  %w(け ケ ke),
  %w(こ コ ko),

  %w(さ サ sa),
  %w(し シ shi),
  %w(す ス su),
  %w(せ セ se),
  %w(そ ソ so),

  %w(た タ ta),
  %w(ち チ chi),
  %w(つ ツ tsu),
  %w(て テ te),
  %w(と ト to),

  %w(な ナ na),
  %w(に ニ ni),
  %w(ぬ ヌ nu),
  %w(ね ネ ne),
  %w(の ノ no),

  %w(は ハ ha),
  %w(ひ ヒ hi),
  %w(ふ フ fu),
  %w(へ ヘ he),
  %w(ほ ホ ho),

  %w(ま マ ma),
  %w(み ミ mi),
  %w(む ム mu),
  %w(め メ me),
  %w(も モ mo),

  %w(や ヤ ya),
  %w(ゆ ユ yu),
  %w(よ ヨ yo),

  %w(ら ラ ra),
  %w(り リ ri),
  %w(る ル ru),
  %w(れ レ re),
  %w(ろ ロ ro),

  %w(わ ワ wa),
  %w(を ヲ wo),
]

kana.each do |group|
  Kana.create({
      hiragana: group[0],
      katakana: group[1],
      romaji: group[2]
  })
end

class CreateKana < ActiveRecord::Migration[5.1]
  def change
    create_table :kana do |t|
      t.string :hiragana, null: false
      t.string :katakana, null: false
      t.string :romaji, null: false
      t.string :consonant
      t.string :vowel
      t.boolean :dakuten, default: false
      t.boolean :handakuten, default: false
      t.string :youon, default: nil
      t.boolean :obsolete, default: false

      t.timestamps
    end
  end
end

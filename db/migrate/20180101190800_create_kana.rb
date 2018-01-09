class CreateKana < ActiveRecord::Migration[5.1]
  def change
    create_table :kana do |t|
      t.string :hiragana
      t.string :katakana
      t.string :romaji
      t.integer :level
      t.string :rhyme

      t.timestamps
    end
  end
end

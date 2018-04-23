class CreateKanji < ActiveRecord::Migration[5.1]
  def change
    create_table :kanji do |t|
      t.string :character, index: true
      t.string :radical, index: true
      t.string :kunyomi, array: true
      t.string :onyomi, array: true
      t.string :meaning, array: true
      t.integer :strokes
      t.integer :jlpt
      t.integer :grade
    end
  end
end

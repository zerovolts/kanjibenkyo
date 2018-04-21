class CreateKanji < ActiveRecord::Migration[5.1]
  def change
    create_table :kanji do |t|
      t.string :character
      t.string :radical
      t.string :kunyomi, array: true
      t.string :onyomi, array: true
      t.string :meaning, array: true
      t.integer :strokes
      t.integer :jlpt
      t.integer :grade
    end
  end
end

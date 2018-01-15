class CreateKanji < ActiveRecord::Migration[5.1]
  def change
    create_table :kanji do |t|
      t.string :character
      t.string :kunyomi, array: true
      t.string :onyomi, array: true
      t.string :meaning, array: true
      t.integer :jlpt

      t.timestamps
    end
  end
end

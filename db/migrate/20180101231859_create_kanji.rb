class CreateKanji < ActiveRecord::Migration[5.1]
  def change
    create_table :kanji do |t|
      t.string :character

      t.timestamps
    end
  end
end

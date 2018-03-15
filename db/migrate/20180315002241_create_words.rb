class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :word
      t.string :furigana
      t.string :meaning, array: true
      t.integer :jlpt

      t.timestamps
    end
  end
end

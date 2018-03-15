class CreateWordClasses < ActiveRecord::Migration[5.1]
  def change
    create_table :word_classes do |t|
      t.string :name
    end
  end
end

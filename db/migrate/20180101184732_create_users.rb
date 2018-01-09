class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :login
      t.string :name
      t.integer :experience

      t.timestamps
    end
  end
end

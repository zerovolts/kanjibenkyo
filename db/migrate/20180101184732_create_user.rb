class CreateUser < ActiveRecord::Migration[5.1]
  def change
    create_table :user do |t|
      t.string :name
      

      t.timestamps
    end
  end
end

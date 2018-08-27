class CreateUserKana < ActiveRecord::Migration[5.1]
  def change
    create_table :user_kana do |t|
      # correct / total
      t.integer :rating
      t.integer :correct, default: 0
      t.integer :count, default: 0
      t.integer :streak, default: 0
      t.integer :highest_streak, default: 0
      # monotonically increasing value using combo as a multiplier
      # used for unlocks
      t.integer :score, default: 0
      t.integer :total_seconds_viewed, default: 0
     
      # for use in SRS
      t.datetime :time_of_last_review
      t.datetime :time_of_next_review

      t.belongs_to :user
      t.belongs_to :kana
    end
  end
end

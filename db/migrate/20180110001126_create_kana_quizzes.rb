class CreateKanaQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :kana_quizzes do |t|
      t.integer :question_count

      t.belongs_to :user
      t.timestamps
    end
  end
end

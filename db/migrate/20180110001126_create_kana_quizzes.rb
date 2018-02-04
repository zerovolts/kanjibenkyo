class CreateKanaQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :kana_quizzes do |t|
      t.integer :total_correct
      t.integer :total_questions
      t.boolean :is_complete, default: false

      t.belongs_to :user
      t.timestamps
    end
  end
end

class CreateKanaQuizQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :kana_quiz_questions do |t|
      t.boolean :is_correct

      t.belongs_to :kana_quiz
      t.timestamps
    end
  end
end

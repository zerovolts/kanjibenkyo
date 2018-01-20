class CreateKanaQuizQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :kana_quiz_questions do |t|
      t.boolean :is_correct
      t.string :question_type
      t.string :answer_type
      t.string :choices, array: true, null: false

      t.references :question # Kana
      t.references :answer # Kana
      t.belongs_to :kana_quiz

      t.timestamps
    end
  end
end

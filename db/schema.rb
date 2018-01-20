# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180110001518) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "kana", force: :cascade do |t|
    t.string "hiragana", null: false
    t.string "katakana", null: false
    t.string "romaji", null: false
    t.string "consonant"
    t.string "vowel"
    t.boolean "dakuten", default: false
    t.boolean "handakuten", default: false
    t.string "youon"
    t.boolean "obsolete", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kana_quiz_questions", force: :cascade do |t|
    t.boolean "is_correct"
    t.string "question_type"
    t.string "answer_type"
    t.string "choices", null: false, array: true
    t.bigint "question_id"
    t.bigint "answer_id"
    t.bigint "kana_quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_kana_quiz_questions_on_answer_id"
    t.index ["kana_quiz_id"], name: "index_kana_quiz_questions_on_kana_quiz_id"
    t.index ["question_id"], name: "index_kana_quiz_questions_on_question_id"
  end

  create_table "kana_quizzes", force: :cascade do |t|
    t.integer "question_count"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_kana_quizzes_on_user_id"
  end

  create_table "kanji", force: :cascade do |t|
    t.string "character"
    t.string "kunyomi", array: true
    t.string "onyomi", array: true
    t.string "meaning", array: true
    t.integer "jlpt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "login"
    t.string "name"
    t.integer "experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

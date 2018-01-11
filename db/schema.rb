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
    t.string "hiragana"
    t.string "katakana"
    t.string "romaji"
    t.integer "level"
    t.string "rhyme"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kana_quiz_questions", force: :cascade do |t|
    t.boolean "is_correct"
    t.bigint "kana_quiz_id"
    t.bigint "kana_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kana_id"], name: "index_kana_quiz_questions_on_kana_id"
    t.index ["kana_quiz_id"], name: "index_kana_quiz_questions_on_kana_quiz_id"
  end

  create_table "kana_quizzes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "kanji", force: :cascade do |t|
    t.string "character"
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

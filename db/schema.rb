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

ActiveRecord::Schema.define(version: 2021_12_06_082348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "reply_id"
    t.integer "post_id"
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["reply_id"], name: "index_comments_on_reply_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "connections", force: :cascade do |t|
    t.integer "connector_id", null: false
    t.integer "connectee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "pending", null: false
    t.index ["connectee_id"], name: "index_connections_on_connectee_id"
    t.index ["connector_id"], name: "index_connections_on_connector_id"
  end

  create_table "educations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "school", null: false
    t.string "degree"
    t.string "subject"
    t.string "start_date"
    t.string "end_date"
    t.string "grade"
    t.text "extracurriculars"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_educations_on_user_id"
  end

  create_table "experiences", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.string "employment_type"
    t.string "company", null: false
    t.string "location"
    t.string "start_date", null: false
    t.boolean "current_role", null: false
    t.string "end_date", null: false
    t.string "industry", null: false
    t.text "headline"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_experiences_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.text "body", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "reactions", force: :cascade do |t|
    t.integer "reactor_id", null: false
    t.string "react_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reactable_type", null: false
    t.bigint "reactable_id", null: false
    t.index ["reactable_type", "reactable_id"], name: "index_reactions_on_reactable_type_and_reactable_id"
    t.index ["reactor_id"], name: "index_reactions_on_reactor_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "headline", null: false
    t.string "country_region", null: false
    t.string "city_district", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

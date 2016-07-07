class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.text :description
      t.string :coursera_url
      t.string :coursera_id
      t.datetime :starts_at
    end
  end
end

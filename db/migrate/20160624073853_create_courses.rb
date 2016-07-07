class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :content_provider_id
      t.string :desc
      t.string :url
      t.datetime :course_start

      t.timestamps null: false
    end
  end
end

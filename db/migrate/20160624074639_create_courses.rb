class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string          :course_id
      t.string          :name
      t.string          :slug
      t.text            :description
      t.string          :logo_url
      t.date            :start_date
      t.string          :language
      t.string          :course_type
      t.string          :preview_link

      t.timestamps null: false
    end
  end
end

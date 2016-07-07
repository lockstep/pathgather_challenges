class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.string :description
      t.string :url
      t.date :start_date

      t.timestamps null: false
    end
  end
end

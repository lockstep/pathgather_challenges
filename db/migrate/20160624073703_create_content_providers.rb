class CreateContentProviders < ActiveRecord::Migration
  def change
    create_table :content_providers do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end

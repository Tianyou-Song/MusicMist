class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.date :release_date
      t.integer :uploader_id, null: false

      t.timestamps
    end

    add_index :songs, :title
    add_index :songs, :release_date
    add_index :songs, :uploader_id
  end
end

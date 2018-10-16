class AddDescriptionToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :description, :text
  end
end

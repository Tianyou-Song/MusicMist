class AddArtistsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :artist, :string
    add_index :songs, :artist
  end
end

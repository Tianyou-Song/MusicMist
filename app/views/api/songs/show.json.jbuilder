json.set! @song.id do
  json.extract! @song, :id, :title, :release_date, :uploader_id, :artist, :description
end

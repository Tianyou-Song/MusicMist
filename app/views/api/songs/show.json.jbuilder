json.set! @song.id do
  json.extract! @song, :id, :title, :uploader_id, :description, :created_at
  json.uploader @song.uploader.username
  json.cover_url url_for(@song.cover) if @song.cover.attached?
  json.audio_url url_for(@song.audio)
end

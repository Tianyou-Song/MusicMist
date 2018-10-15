@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :release_date, :uploader_id, :artist
    json.user song.uploader.username
    json.audio_url 'https:' + song.audio.url(:orignal, timestamp: false)
    json.cover_url 'https:' + song.cover.url(:original, timestamp: false)
  end
end

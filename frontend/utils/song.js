export const createSong = song => {
  console.log(song);
  return $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: {song}
  });
};

export const fetchSong = id => {
  return $.ajax({
    url: `/api/songs/${id}`,
    method: 'GET'
  });
};

export const fetchAllSongs = () => {
  return $.ajax({
    url: '/api/songs',
    method: 'GET'
  });
};

export const updateSong = song => {
  return $.ajax({
    url: `/api/songs/${song.id}`,
    method: 'PATCH',
    data: {song}
  });
};

export const deleteSong = id => {
  return $.ajax({
    url: `/api/songs/${id}`,
    method: 'DELETE'
  });
};

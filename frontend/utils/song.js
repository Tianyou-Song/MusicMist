export const createSong = formData => {
  console.log(formData);
  return $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
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

export const updateSong = formData => {
  return $.ajax({
    url: `/api/songs/${song.id}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteSong = id => {
  return $.ajax({
    url: `/api/songs/${id}`,
    method: 'DELETE'
  });
};

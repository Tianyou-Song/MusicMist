import * as SongAPIUtil from '../utils/song';

import {
  receiveErrors,
  clearErrors
} from './error';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const DELETE_SONG = 'DELETE_SONG';

export const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const removeSong = id => {
  return {
    type: DELETE_SONG,
    id
  };
};

export const createSong = song => dispatch => SongAPIUtil.createSong(song)
  .then(song => dispatch(receiveSong(song)),
    errors => dispatch(receiveErrors(errors)));

export const fetchSong = id => dispatch => {
  return SongAPIUtil.fetchSong(id)
    .then(song => dispatch(receiveSong(song)),
    errors => dispatch(receiveErrors(errors)));
};

export const searchSongs = (params, limit) => dispatch => {
  return SongAPIUtil.searchSongs(params, limit)
    .then(songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveErrors(errors)));
}

export const fetchAllSongs = () => dispatch => SongAPIUtil.fetchAllSongs()
  .then(songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveErrors(errors)));

export const updateSong = song => dispatch => {
  return SongAPIUtil.updateSong(song)
  .then(song => dispatch(receiveSong(song)),
  errors => dispatch(receiveErrors(errors)));
};

export const deleteSong = id => dispatch => SongAPIUtil.deleteSong(id)
  .then(song => dispatch(removeSong(song.id)));

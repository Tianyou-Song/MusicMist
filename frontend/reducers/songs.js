import merge from 'lodash/merge';

import {
  RECEIVE_SONG,
  RECEIVE_SONGS,
  DELETE_SONG
} from '../actions/song';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SONG:
      merge(newState, action.song);
      return newState;
    case RECEIVE_SONGS:
      return merge(newState, action.songs);
    case DELETE_SONG:
      delete newState[action.is];
      return newState;
    default:
      return newState;
  }
};

import { combineReducers } from 'redux';

import usersReducer from './users';
import songsReducer from './songs';

export default combineReducers({
  users: usersReducer,
  songs: songsReducer
});

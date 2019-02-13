import { combineReducers } from 'redux';

import modal from './modal';
import player from './player';

export default combineReducers({
  modal,
  player
});

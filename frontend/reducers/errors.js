import union from 'lodash/union';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      console.log(action.errors.responseText);
      return union([], action.errors.responseJSON);
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
};

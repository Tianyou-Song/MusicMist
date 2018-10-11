import union from 'lodash/union';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return union([], state, action.errors.responseJSON);
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
};

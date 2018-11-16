import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_USER } from '../actions/user';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, {[action.user.id]: action.user});
    case RECEIVE_USER:
      return merge(newState, {[action.user.id]: action.user});
    default:
      return state;
  }
};

import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session';

const usersReducer = (state = {}, action) => {
  console.log(action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.currentUser});
    default:
      return state;
  }
};

export default usersReducer;

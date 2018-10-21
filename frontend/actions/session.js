import {
  postUser,
  postSession,
  deleteSession
} from '../utils/session';
import {
  receiveErrors,
  clearErrors
} from './error';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)));

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors)));

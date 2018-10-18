import * as UserApiUtil from '../utils/user';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const removeUser = id => {
  return {
    type: DELETE_USER,
    id
  };
};

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const updateUser = (id, data) => dispatch => {
  return UserApiUtil.updateUser(id, data).then(user => dispatch(receiveUser(user)));
};

export const deleteUser = id => dispatch => {
  return UserApiUtil.deleteUser(id).then(song => dispatch(removeUser(User.id)));
};

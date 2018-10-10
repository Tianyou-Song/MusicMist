export const postUser = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  });
};

export const getUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const deleteUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'DELETE'
  });
};

export const postSession = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user}
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

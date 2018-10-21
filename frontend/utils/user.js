export const fetchUser = id => {
  return $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  });
};

export const updateUser = (id, data) => {
  return $.ajax({
    url: `api/users/${id}`,
    method: 'PATCH',
    data: data
  });
};

export const deleteUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'DELETE'
  });
};

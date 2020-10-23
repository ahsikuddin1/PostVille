import api from './api-config';

export const getComments = async () => {
  const response = await api.get(`/comments`);
  return response.data;
};
export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const postComment = async (commentData) => {
  const resp = await api.post('/comments', {comment: commentData});
  return resp.data;
}

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, {comment: commentData});
  return resp.data;
}

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}
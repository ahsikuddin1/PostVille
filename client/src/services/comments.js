import api from './api-config';

export const getComments = async () => {
  const response = await api.get(`/comments`);
  return response.data;
};
export const getOnePost = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const postPost = async (postData) => {
  const resp = await api.post('/comments', {post: postData});
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/comments/${id}`, {post: postData});
  return resp.data;
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}
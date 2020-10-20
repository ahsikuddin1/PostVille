import api from './api-config';

export const getComments = async () => {
  const response = await api.get(`/comments`);
  return response.data;
};

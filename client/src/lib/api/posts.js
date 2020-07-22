import qs from 'qs';
import client from './client';

export const writePost = ({ imageList, title, content, tags }) =>
  client.post('/api/posts', { imageList, title, content, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, imageList, title, content, tags }) =>
  client.patch(`/api/posts/${id}`, {
    imageList,
    title,
    content,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);

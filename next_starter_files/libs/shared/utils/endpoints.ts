import axios from "axios";

export const SERVER_BASE_URL = `https://api.realworld.io/api`;

export const ENDPOINTS = {
    ARTICLES: '/articles',
    TAGS: '/tags',
    COMMENTS: '/comments',
}

export const LOCAL_API = `http://localhost:3000/api`;

export const LOCAL_ENDPOINTS = {
  GET_BULLET_POINTS: '/get-bullet-points',
  SAVE_BULLET_POINTS: '/save-bullet-points'
}

export async function fetcher<T>(url:string) {
  await new Promise(r => setTimeout(r, 6000));
  const { data } = await axios.get<T>(url);
  return data;
}

export const getQuery = (limit: number, page: number): string =>
    `limit=${limit}&offset=${page ? page * limit : 0}`;

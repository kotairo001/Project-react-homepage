import axios from "./utils/baseAxios";
const baseNews = "news";
export const getNews = async () => {
  return await axios.get(`${baseNews}`);
};

export const deleteNews = async (id) => {
  return await axios.delete(`${baseNews}/${id}`);
};

export const addNews = async (user) => {
  return await axios.post(`${baseNews}`, user);
};

export const updateNews = async (id, status) => {
  return await axios.put(`${baseNews}/${id}`, status);
};
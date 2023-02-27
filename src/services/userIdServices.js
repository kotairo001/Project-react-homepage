import axios from "./utils/baseAxios";

const baseURL = "userID";

export const getUserID = async () => {
  return await axios.get(`${baseURL}`);
};

export const deleteUserID = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};

export const addUserID = async (id) => {
  return await axios.post(`${baseURL}`, id);
};

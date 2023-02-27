import axios from "./utils/baseAxios";

const baseURL = "user";

export const getUser = async () => {
  return await axios.get(`${baseURL}`);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${baseURL}`, user);
};

export const updateUser = async (id, status) => {
  return await axios.put(`${baseURL}/${id}`, status);
};









// export {getUser, deleteUser, addUser, updateUser}

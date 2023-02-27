import axios from "./utils/baseAxios";

const baseAbout = "about";
export const getAbout = async () => {
  return await axios.get(`${baseAbout}`);
};


export const addAbout = async (user) => {
  return await axios.post(`${baseAbout}`, user);
};
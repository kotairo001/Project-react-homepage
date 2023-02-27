import axios from "./utils/baseAxios";

const baseCase = "case";
export const getCase = async () => {
  return await axios.get(`${baseCase}`);
};


export const addCase = async (user) => {
  return await axios.post(`${baseCase}`, user);
};
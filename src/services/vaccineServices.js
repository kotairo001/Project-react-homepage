import axios from "./utils/baseAxios";
const baseVaccine = "vaccine";
export const getVaccine = async () => {
  return await axios.get(`${baseVaccine}`);
};

export const deleteVaccine = async (id) => {
  return await axios.delete(`${baseVaccine}/${id}`);
};

export const addVaccine = async (user) => {
  return await axios.post(`${baseVaccine}`, user);
};

export const updateVaccine = async (id, status) => {
  return await axios.put(`${baseVaccine}/${id}`, status);
};
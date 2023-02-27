import axios from "./utils/baseAxios";
const baseHospital = "hospital";
export const getHospital = async () => {
  return await axios.get(`${baseHospital}`);
};

export const deleteHospital = async (id) => {
  return await axios.delete(`${baseHospital}/${id}`);
};

export const addHospital = async (user) => {
  return await axios.post(`${baseHospital}`, user);
};

export const updateHospital = async (id, status) => {
  return await axios.put(`${baseHospital}/${id}`, status);
};
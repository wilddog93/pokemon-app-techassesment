
import AxiosInstance from 'axios'

const axios = AxiosInstance.create({
  baseURL: process.env.API_ENDPOINT
});

const prefix = '/gender'

export const getGenders = async (params:any) => {
  const response = await axios.get(`${prefix}`, params);
  return response.data.results;
};

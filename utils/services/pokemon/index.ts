
import AxiosInstance from 'axios'

const axios = AxiosInstance.create({
  baseURL: process.env.API_ENDPOINT
});

const prefix = '/pokemon'

export const getPokemon = async (nameOrId: string) => {
  if (!nameOrId) return null;
  const response = await axios.get(`${prefix}/${nameOrId}`);
  return response.data;
};

export const getPokemons = async (params:any) => {
  const response = await axios.get(`${prefix}`, params);
  return response.data.results;
};

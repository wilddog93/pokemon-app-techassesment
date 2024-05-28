
import AxiosInstance from 'axios'

const axios = AxiosInstance.create({
  baseURL: process.env.API_ENDPOINT
});

const prefix = '/pokemon'

export const getPokemon = async (nameOrId: string) => {
  const response = await axios.get(`${prefix}/${nameOrId}`);
  return response.data;
};

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${prefix}}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
};

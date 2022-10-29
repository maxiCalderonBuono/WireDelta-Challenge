import { pokemonApi } from "../api";

export const getPokemons = () => {
  return fetchPokemons();
};

const fetchPokemons = () => {
  return pokemonApi.get("?limit=10").then((res) => console.log(res.data));
};

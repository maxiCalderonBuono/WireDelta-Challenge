import { pokemonApi } from "../api";
import { SinglePokemon } from "../interfaces/allPokemonsResponse";

export const getPokemonById = async (id: string | undefined) => {
  const resp = await pokemonApi.get<SinglePokemon[]>(`/${id}`);

  return resp.data;
};

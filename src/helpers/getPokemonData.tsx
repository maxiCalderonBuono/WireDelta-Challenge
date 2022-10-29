import { pokemonApi } from "../api";
import { PokemonPagination } from "../types";

export const getPokemons = async (
  pagination: number,
  limit: string
): Promise<PokemonPagination> => {
  const { data } = await pokemonApi.get<PokemonPagination>(
    `/pokemon/?limit=${limit}&offset=${pagination}`
  );

  return data;
};

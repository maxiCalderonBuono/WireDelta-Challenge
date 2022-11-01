import { pokemonApi } from "../api";
import {
  PokemonsResponse,
  Result,
  SinglePokemon,
} from "../interfaces/allPokemonsResponse";

export const getAllPokemons = async (
  page: number,
  limit: number
): Promise<SinglePokemon[]> => {
  const resp = await pokemonApi.get<PokemonsResponse>(
    `?limit=${limit}&offset=${page * limit}`
  );

  const totalAmount = resp.data.count;

  const initialList = resp.data.results;

  return getPokemon(initialList, totalAmount);
};

const getPokemon = async (
  initialList: Result[],
  totalAmount: number
): Promise<SinglePokemon[]> => {
  const pokemon = initialList.map(async ({ url }) => {
    const id = url.split("/")[6];

    const resp = await pokemonApi.get<SinglePokemon>(`/${id}`);

    return resp.data;
  });

  const pokemonList = await Promise.all(pokemon);

  return getEachPokemon(pokemonList, totalAmount);
};

const getEachPokemon = (
  pokemonList: SinglePokemon[],
  totalAmount: number
): SinglePokemon[] => {
  const singlePokemonArray: SinglePokemon[] = pokemonList.map(
    ({
      id,
      height,
      weight,
      base_experience,
      is_default,
      order,
      species,
      abilities,
      forms,
      types,
      game_indices,
      stats,
      moves,
      name,
    }) => {
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      const upperName = name.toUpperCase();

      return {
        id,
        height,
        weight,
        is_default,
        base_experience,
        order,
        species,
        abilities,
        forms,
        types,
        game_indices,
        stats,
        moves,
        name: upperName,
        picture,
      };
    }
  );

  return singlePokemonArray;
};

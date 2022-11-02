import { pokemonApi } from "../api";
import { SinglePokemon } from "../interfaces/allPokemonsResponse";

export const getPokemonById = async (id: string | undefined) => {
  const { data } = await pokemonApi.get<SinglePokemon[]>(`/${id}`);

  console.log(data);

  const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return { ...data, picture };
};

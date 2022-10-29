import { useState } from "react";
import { getPokemons } from "../helpers";
import { SimplePokemon, Result } from "../types";
import { getEnvVariables } from "../helpers";

const { VITE_POKEMONART_URL } = getEnvVariables();

export const usePokemonPagination = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );

  const loadPokemons = async (pagination: number, limit: string) => {
    setIsLoading(true);
    const resp = await getPokemons(pagination, limit);
    mapPokemonList(resp.results);
  };

  const mapPokemonList = async (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = await pokemonList.map(
      ({ name, url }) => {
        const urlParts = url.split("/");

        const id = urlParts[urlParts.length - 2];

        const picture = `${VITE_POKEMONART_URL}${id}.png`;

        return { id, picture, name };
      }
    );

    setSimplePokemonList([...newPokemonList]);
    setIsLoading(false);
  };

  return {
    isLoading,
    simplePokemonList,
    loadPokemons,
  };
};

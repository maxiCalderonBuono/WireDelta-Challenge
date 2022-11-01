import type { RootState, AppDispatch } from "../../store";

import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { getAllPokemons } from "../../../helpers/getAllPokemons";

export const getPokemons = (page: number = 0, limit: number = 20) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(startLoadingPokemons());

    const data = await getAllPokemons(page, limit);

    dispatch(setPokemons({ pokemons: data, page, limit }));
  };
};

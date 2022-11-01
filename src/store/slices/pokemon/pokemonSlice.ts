import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SinglePokemon } from "../../../interfaces/allPokemonsResponse";

export interface PokemonState {
  page: number;
  limit: number;
  total?: number;
  searchValue?: string;
  filter?: string;
  pokemons: SinglePokemon[];
  isLoading?: boolean;
}

const initialState: PokemonState = {
  page: 0,
  limit: 20,
  searchValue: "",
  filter: "A-Z",
  pokemons: [],
  total: 0,
  isLoading: true,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonState>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.pokemons = action.payload.pokemons;
    },

    onSearchPokemon: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },

    onFilterOptions: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
  },
});

export const {
  startLoadingPokemons,
  setPokemons,
  onSearchPokemon,
  onFilterOptions,
} = pokemonSlice.actions;

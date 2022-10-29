export interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_POKEMONART_URL: string;
}

export interface PokemonPagination {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}

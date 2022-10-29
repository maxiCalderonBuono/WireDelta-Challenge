import { ImportMetaEnv } from "../types";

export const getEnvVariables = (): ImportMetaEnv => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_POKEMONART_URL: import.meta.env.VITE_POKEMONART_URL,
  };
};
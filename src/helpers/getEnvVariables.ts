import { ImportMetaEnv } from "../env";

export const getEnvVariables = (): ImportMetaEnv => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
  };
};

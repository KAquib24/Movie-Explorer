/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
  // add more env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// src/api/tmbd.ts
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (
  endpoint: string,
  params: Record<string, string | number> = {}
) => {
  try {
    if (!API_KEY) throw new Error('TMDB API key is missing');

    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('language', 'en-US');

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    console.log('Fetching URL:', url.toString());

    const res = await fetch(url.toString());
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`API response was not ok: ${res.status} - ${errText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return { results: [], total_pages: 1 };
  }
};


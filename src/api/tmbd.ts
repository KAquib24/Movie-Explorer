const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint: string, params: Record<string, string | number> = {}) => {
  try {
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', API_KEY || '');
    url.searchParams.append('language', 'en-US');

    // Append additional query params
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('API response was not ok');

    return await res.json(); // Return full response (with results and total_pages)
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return { results: [], total_pages: 1 }; // fallback
  }
};


// import { Movie } from "../types/type";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';
export const fetchMovies = async (endpoint: string, query = '') => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}${query}&language=en-US&page=1`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return [];
  }
};

import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/type';

const Trending = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetchMovies('/trending/movie/day');
        
        // ✅ Critical fix: Verify we have an array before setting state
        if (Array.isArray(response?.results)) {
          setMovies(response.results);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'API error');
        setMovies([]); // Ensure movies is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-black/80 via-slate-900 to-purple-950 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10">
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            Trending Movies
          </h1>

          {loading && <p className="text-white">Loading movies...</p>}
          
          {error && (
            <div className="text-red-500 p-4">
              Error: {error}
            </div>
          )}

          {/* ✅ Safe mapping with optional chaining */}
          <div className="flex flex-wrap gap-6 px-12">
            {movies?.map?.((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id} // ✅ Important: pass id here
                title={movie.title}
                year={movie.release_date?.split('-')[0] || 'N/A'}
                duration="120 mins"
                image={
                  movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/placeholder-movie.png'
                }
                quality={movie.vote_average >= 8 ? "4K" : "HD"}
              />
            )) || null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
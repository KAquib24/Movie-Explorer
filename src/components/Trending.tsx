import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/type';

const Trending = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetchMovies('/trending/movie/day');
        
        // 1. Verify response has results array
        if (response && Array.isArray(response.results)) {
          setMovies(response.results);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setMovies([]); // Ensure movies is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-black/80 via-slate-900 to-purple-950 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10">
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            Trending Movies
          </h1>

          {loading && (
            <div className="flex justify-center items-center h-64">
              <p className="text-white">Loading movies...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded p-4 mb-6 mx-8">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* 2. Safe rendering with optional chaining */}
          <div className="flex flex-wrap gap-6 px-12">
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
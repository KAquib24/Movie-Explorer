import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/type';
import { Link } from 'react-router-dom';

const Popular = () => {
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
      <section className="relative bg-gradient-to-br from-black/80 via-slate-900 to-purple-950 py-10 overflow-hidden">
  {/* Blur background */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

  {/* Content container with higher z-index */}
  <div className="relative z-10">
    <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
      Popular Movies
    </h1>

    {loading && <p className="text-white">Loading movies...</p>}
    
    {error && (
      <div className="text-red-500 p-4">
        Error: {error}
      </div>
    )}

    {/* Movie Grid */}
    <div className="flex flex-wrap gap-6 px-12">
      {movies?.map?.((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id} 
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

    {/* ✅ Move Show More here (inside z-10 layer) */}
    <div className="text-center mt-8">
      <Link
        to="/allmovies"
        className="text-white font-semibold bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full transition"
      >
        Show More
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default Popular;
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/type';

const NewRelease = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movies sorted by release date (latest first)
    fetchMovies('/discover/movie', '&sort_by=release_date.desc').then(setMovies);
  }, []);

  return (
    <div className="bg-black text-white py-10">
      <h1 className="text-3xl font-bold px-8 mb-6">New Releases</h1>
      <div className="flex flex-wrap gap-6 px-12">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date?.split('-')[0]}
            duration="120 mins"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            quality={movie.vote_average >= 8 ? '4K' : 'HD'}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;

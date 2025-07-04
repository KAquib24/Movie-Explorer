import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/type';

const NewRelease = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movies sorted by release date (latest first)
    fetchMovies('/discover/movie', { sort_by: 'release_date.desc' }).then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br  from-black/80 via-slate-900 to-purple-950 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10">
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            New Release
          </h1>

          <div className="flex flex-wrap gap-6 px-12">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.release_date?.split('-')[0]}
                duration="120 mins" // TMDB doesn't return runtime in this endpoint
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                quality={movie.vote_average >= 8 ? "4K" : "HD"}
              />
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewRelease;

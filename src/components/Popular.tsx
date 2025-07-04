import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../api/tmbd';
import { Movie } from '../types/type';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

    
  useEffect(() => {
    fetchMovies('/movie/popular').then(setMovies);
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-purple-950 via-slate-900 to-black/80 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10">
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            Popular Movies
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

            <div className="flex justify-center mt-10">
            <Link
              to="/allmovies"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
            >
              Show More
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;

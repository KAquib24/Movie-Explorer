import React from 'react';
import { Calendar, Star } from 'lucide-react';
import MovieTabs from '../components/MovieTabs';

const movie = {
  title: "Ballerina",
  overview:
    "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
  release_date: "2025-06-04",
  vote_average: 7.242,
  vote_count: 562,
  original_language: "en",
  popularity: 658.8665,
  poster_path: "/mKp4euM5Cv3m2U1Vmby3OGwcD5y.jpg",
  backdrop_path: "/sItIskd5xpiE64bBWYwZintkGf3.jpg",
  genre_ids: [28, 53, 80],
};

const GENRE_MAP: Record<number, string> = {
  28: "Action",
  53: "Thriller",
  80: "Crime",
  12: "Adventure",
  18: "Drama",
  35: "Comedy",
  10751: "Family",
  16: "Animation",
  14: "Fantasy",
  27: "Horror",
  878: "Sci-Fi",
  10402: "Music",
};

const genreNames = movie.genre_ids.map((id) => GENRE_MAP[id]);

const MoviesInfo = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white px-6 py-12"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* ✅ Dark overlay (no blur, or just slight) */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* ✅ Main Content */}
      <div className="relative z-10 p-8 rounded-xl max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Poster */}
          <div className="flex-shrink-0 w-48">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Info */}
          <div className="space-y-4 text-white max-w-3xl mt-6">
            <h1 className="text-4xl font-extrabold">{movie.title}</h1>

            <p className="text-lg text-gray-300">{movie.overview}</p>

            <div className="flex flex-wrap gap-6 text-sm mt-4">
              <p className="flex items-center gap-2">
                <Calendar className="text-amber-500 w-4 h-4" />
                <span>Release: {movie.release_date}</span>
              </p>
              <p className="flex items-center gap-2">
                <Star className="text-amber-500 w-4 h-4" />
                <span>
                  Rating: {movie.vote_average} ({movie.vote_count} votes)
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Language:</span>{" "}
                {movie.original_language.toUpperCase()}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Popularity:</span>{" "}
                {movie.popularity}
              </p>
            </div>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {genreNames.map((genre) => (
                <span
                  key={genre}
                  className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Movie Tabs Section */}
        <div className="mt-10">
          <MovieTabs />
        </div>
      </div>
    </div>
  );
};

export default MoviesInfo;

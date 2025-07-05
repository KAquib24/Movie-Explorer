// src/pages/MovieInfo.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Star } from 'lucide-react';
import { fetchMovies } from '../api/tmbd';
import MovieTabs from '../components/MovieTabs';

const GENRE_MAP: Record<number, string> = {
  28: 'Action',
  53: 'Thriller',
  80: 'Crime',
  12: 'Adventure',
  18: 'Drama',
  35: 'Comedy',
  10751: 'Family',
  16: 'Animation',
  14: 'Fantasy',
  27: 'Horror',
  878: 'Sci-Fi',
  10402: 'Music',
};

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMovies(`/movie/${id}`).then((data) => {
        setMovie(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (!movie) return <p className="text-white text-center mt-10">Movie not found.</p>;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white px-6 py-12"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
      <div className="relative z-10 p-8 rounded-xl max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0 w-48">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg"
            />
          </div>
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
                <span className="font-semibold">Language:</span>{' '}
                {movie.original_language?.toUpperCase()}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Popularity:</span>{' '}
                {movie.popularity}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genres?.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {genre.name || GENRE_MAP[genre.id]}
                </span>
              ))}
            </div>
          </div>
        </div>
        <MovieTabs overview={movie.overview} />
      </div>
    </div>
  );
};

export default MovieInfo;

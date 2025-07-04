import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd'; // must return full data with .results and .total_pages
import { Movie } from '../types/type';

const AllMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  fetchMovies('/movie/popular', { page: currentPage }).then((res) => {
    setMovies(res.results);
    setTotalPages(res.total_pages);
  });
}, [currentPage]);


  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  return (
    <section className="relative bg-gradient-to-br from-black/80 via-slate-900 py-10 min-h-screen">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />
      <div className="relative z-10 px-8">
        <h1 className="text-3xl font-bold text-white mb-6">All Movies</h1>

        {loading && <p className="text-white">Loading movies...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white/10 text-white rounded-lg p-4 shadow-lg flex flex-col"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-72 object-cover rounded"
                  />
                  <h2 className="mt-3 font-semibold text-lg">{movie.title}</h2>
                  <p className="text-amber-400 text-sm">
                    {movie.release_date?.split('-')[0] || '—'}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 disabled:opacity-30"
              >
                Previous
              </button>

              <span className="text-white font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AllMovies;

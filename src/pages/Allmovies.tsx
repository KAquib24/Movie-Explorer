import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmbd';
import { Movie } from '../types/type';

const AllMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetchMovies('/movie/popular', { page: currentPage });
        if (!response.results) throw new Error('Invalid data format');
        
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
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

        {loading && (
          <div className="flex justify-center items-center h-64">
            <p className="text-white">Loading movies...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-500 rounded p-4 mb-6">
            <p className="text-red-300">{error}</p>
            <button 
              onClick={() => setCurrentPage(1)}
              className="mt-2 px-4 py-2 bg-red-500/20 text-white rounded hover:bg-red-500/30"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {movies.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-white/70">No movies found</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="bg-white/10 text-white rounded-lg p-4 shadow-lg flex flex-col hover:scale-105 transition-transform duration-200"
                    >
                      <img
                        src={
                          movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : '/placeholder-movie.png'
                        }
                        alt={movie.title}
                        className="w-full h-72 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder-movie.png';
                        }}
                      />
                      <h2 className="mt-3 font-semibold text-lg line-clamp-1">{movie.title}</h2>
                      <p className="text-amber-400 text-sm">
                        {movie.release_date?.split('-')[0] || '—'}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        Rating: {movie.vote_average?.toFixed(1) || 'N/A'}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1 || loading}
                    className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <span className="text-white font-semibold">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages || loading}
                    className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AllMovies;
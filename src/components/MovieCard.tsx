import React from 'react';
import { Clock } from 'lucide-react';

interface MovieCardProps {
  title: string;
  year: string;
  duration: string;
  image: string;
  quality?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, duration, image, quality = "HD" }) => {
  return (
    <div className="card p-6 max-w-xs rounded-xl bg-white/5 border border-white/10 shadow-xl">
      <img
        src={image}
        alt={`${title} Poster`}
        className="h-[450px] w-full object-cover rounded-lg"
      />

      <div className="name-year flex justify-between my-3 text-white font-manrope">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-amber-400 font-semibold text-sm">{year}</p>
      </div>

      <div className="quality-movielength flex justify-between items-center text-white text-sm font-inter">
        <p className="border-2 border-amber-400 px-3 py-[1px] text-amber-400 font-semibold rounded-full">
          {quality}
        </p>
        <div className="flex items-center gap-1">
          <p className="font-extralight">{duration}</p>
          <Clock className="h-4 w-4 text-amber-400" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import { Clock } from 'lucide-react';
import React from 'react';

const Popular = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-purple-950 via-slate-900 to-black/80 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        {/* Content goes here */}
        <div className="relative z-10">
          {/* Heading */}
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            Popular Movies
          </h1>

          {/* Movie Card */}
          <div className="card p-6 max-w-xs mx-12 rounded-xl bg-white/5 border border-white/10 shadow-xl">
            <img
              src="/assets/card.webp"
              alt="Movie Poster"
              className="h-[450px] w-full object-cover rounded-lg"
            />

            {/* Title & Year */}
            <div
              className="name-year flex justify-between my-3 text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <p className="font-bold text-lg">Bellerina</p>
              <p className="text-amber-400 font-semibold text-sm">2025</p>
            </div>

            {/* Quality & Duration */}
            <div
              className="quality-movielength flex justify-between items-center text-white text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p className="border-2 border-amber-400 px-3 py-[1px] text-amber-400 font-semibold rounded-full">
                4K
              </p>
              <div className="flex items-center gap-1">
                <p className="font-extralight">138 mins</p>
                <Clock className="h-4 w-4 text-amber-400" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;

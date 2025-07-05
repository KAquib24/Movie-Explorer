import React from "react";
import {
  Zap,
  HeartIcon,
  SkullIcon,
  LaughIcon,
  RocketIcon,
  CassetteTapeIcon,
} from "lucide-react";

const Genre = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-slate-800 to-gray-900 py-10">
      {/* Blur background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-3xl text-white py-6 font-poppins font-extrabold">
          Genre
        </h1>

        {/* Responsive Genre Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Action */}
          <div className="rounded-xl p-6 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-orange-500 to-red-600 shadow-md hover:shadow-xl transition-all duration-300">
            <Zap className="text-white h-6 w-6 mb-2" />
            <h2 className="text-white font-bold text-lg">Action</h2>
            <p className="text-white text-sm">2000 Movies</p>
          </div>

          {/* Romance */}
          <div className="rounded-xl p-6 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-pink-500 to-rose-600 shadow-md hover:shadow-xl transition-all duration-300">
            <HeartIcon className="text-white h-6 w-6 mb-2" />
            <h2 className="text-white font-bold text-lg">Romance</h2>
            <p className="text-white text-sm">2000 Movies</p>
          </div>

          {/* Horror */}
          <div className="rounded-xl p-6 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md hover:shadow-xl transition-all duration-300">
            <SkullIcon className="text-white h-6 w-6 mb-2" />
            <h2 className="text-white font-bold text-lg">Horror</h2>
            <p className="text-white text-sm">2000 Movies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genre;

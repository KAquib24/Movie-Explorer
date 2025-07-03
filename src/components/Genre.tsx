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
    <div>
      <section className="relative bg-gradient-to-br from-indigo-900 via-slate-800 to-gray-900 bg-opacity-80 py-10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10">
          {/* Heading */}
          <h1 className="text-3xl text-white py-6 px-8 font-poppins font-extrabold">
            Genre
          </h1>

          {/* Genre Card */}
          <div className="inline-block ">
            <div className="flex gap-6 ml-8 pr-12">
              <div className=" rounded-xl p-10 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-orange-500 to-red-600 shadow-md hover:shadow-xl transition-all duration-300">
                <Zap className="text-white h-6 w-6 mb-2" />
                <h2 className="text-white font-bold text-lg">Action</h2>
                <p className="text-white text-sm">2000 Movies</p>
              </div>

              <div className="rounded-xl p-6 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-pink-500 to-rose-600 shadow-md hover:shadow-xl transition-all duration-300">
                <HeartIcon className="text-white h-6 w-6 mb-2" />
                <h2 className="text-white font-bold text-lg">Romance</h2>
                <p className="text-white text-sm">2000 Movies</p>
              </div>

              <div className="rounded-xl p-6 flex flex-col items-start border-2 border-gray-950 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md hover:shadow-xl transition-all duration-300">
                <SkullIcon className="text-white h-6 w-6 mb-2" />
                <h2 className="text-white font-bold text-lg">Horror</h2>
                <p className="text-white text-sm">2000 Movies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Genre;

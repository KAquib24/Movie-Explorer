import React from 'react';
// icons
import { Star , Calendar , Clock , Play , Plus} from 'lucide-react';

// componenets
import Navbar from './Navbar';
const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/poster.jpeg')" }}>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section Info */}
        <section className="flex flex-col justify-center items-start h-screen px-8 gap-6">
          {/* Badge */}
          <span className='inline-block bg-red-600 px-3 py-1 rounded-lg text-white text-sm font-outfit'>
            Featured
          </span>

          {/* Headings */}
          <div className="font-bold font-inter text-5xl leading-tight text-left">
            <p className=''>All The Latest Movies</p>
            <p>Web-Series, & TV Shows</p>
          </div>

          {/* Genres */}
          <div className="flex gap-4 font-mono">
            <p className='bg-white/10 px-3 py-1 rounded-2xl border border-white/20 backdrop-blur-sm'>Horror</p>
            <p className='bg-white/10 px-3 py-1 rounded-2xl border border-white/20 backdrop-blur-sm'>Comedy</p>
            <p className='bg-white/10 px-3 py-1 rounded-2xl border border-white/20 backdrop-blur-sm'>Suspense</p>
          </div>

          {/* {Button} */}
          <div>
            <button className="font-mono font-semibold bg-slate-50 py-4 px-10 text-black rounded-[30px] border-3 border-purple-950 transition-all duration-300 ease-in-out hover:bg-purple-950 hover:text-white">
              Start Watching
            </button>
          </div>

        </section>

      </div>
      );
    };
      
export default Hero;

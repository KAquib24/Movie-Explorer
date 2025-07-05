// src/components/MovieTabs.tsx
import React, { useState } from 'react';
import { Download, Star } from 'lucide-react';

const MovieTabs = ({ overview }: { overview: string }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="text-gray-300">
            <h2 className="text-white text-xl font-semibold mb-2">Overview</h2>
            <p>{overview}</p>
          </div>
        );
      case 'download':
        return (
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#111827] text-white p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold">4K Ultra HD</h3>
                <p className="text-red-400 font-bold">$19.99</p>
              </div>
              <p>Size: 8.5 GB</p>
              <p>Format: MP4</p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>

            <div className="bg-[#111827] text-white p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold">1080p HD</h3>
                <p className="text-red-400 font-bold">$14.99</p>
              </div>
              <p>Size: 4.2 GB</p>
              <p>Format: MP4</p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
          </div>
        );
      case 'reviews':
        return <p className="text-gray-300">⭐ Reviews coming soon!</p>;
      case 'similar':
        return <p className="text-gray-300">🎬 Similar movies coming soon!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="text-white px-6 py-10 bg-black/70 backdrop-blur-md mt-10 rounded-lg">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mb-6">
        {['overview', 'download', 'reviews', 'similar'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-1 border-b-2 ${
              activeTab === tab
                ? 'border-red-500 text-red-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } capitalize font-medium transition-all`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default MovieTabs;

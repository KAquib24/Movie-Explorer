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
            <p className="leading-relaxed">{overview}</p>
          </div>
        );
      case 'download':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* 4K Card */}
            <div className="bg-[#111827] text-white p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">4K Ultra HD</h3>
                <p className="text-red-400 font-bold">$19.99</p>
              </div>
              <p>Size: 8.5 GB</p>
              <p>Format: MP4</p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>

            {/* 1080p Card */}
            <div className="bg-[#111827] text-white p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-2">
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
        return (
          <div className="text-gray-300">
            <p>⭐ Reviews coming soon!</p>
          </div>
        );
      case 'similar':
        return (
          <div className="text-gray-300">
            <p>🎬 Similar movies coming soon!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-white px-4 sm:px-6 md:px-10 py-10 bg-black/70 backdrop-blur-md mt-10 rounded-lg max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-gray-700 mb-6">
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

      {/* Tab Content */}
      {renderContent()}
    </div>
  );
};

export default MovieTabs;

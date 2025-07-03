import React from 'react';
import { Film, InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-8 flex justify-between flex-wrap gap-10">
        
        {/* Left Side Footer */}
        <div className="flex flex-col max-w-sm">
          {/* Logo */}
          <div className="flex items-center pb-6">
            <Film className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold ml-2">Cine-Vault</span>
          </div>

          {/* Description */}
          <p className="pb-6 text-left text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eligendi odio aspernatur quas impedit dolorem architecto! Veniam, corporis?
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <FacebookIcon />
          </div>
        </div>

        {/* Right Side Footer - Split into two columns */}
        <div className="flex gap-20">
          {/* Column 1 */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold pb-4">Quick Links</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="#Home">Home</a>
              <a href="#Movies">Movies</a>
              <a href="#TV Shows">TV Shows</a>
              <a href="#Genre">Genre</a>
              <a href="#Mylist">My List</a>
              <a href="#Watchlist">Watchlist</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold pb-4">Resources</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <hr className="border-gray-700 my-8 " />
      <p className="text-center text-sm text-gray-400">
        &#169; 2025 CineVault. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

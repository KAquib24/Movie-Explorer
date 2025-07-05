import React, { useState } from "react";
import { Film, Search, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/allmovies?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-black/90 backdrop-blur-md w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Film className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold text-white">Cine-Vault</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center font-poppins text-sm">
          <a
            href="/"
            className="text-white hover:text-red-400 font-bold transition"
          >
            Home
          </a>
          <a
            href="/allmovies"
            className="text-gray-300 hover:text-red-400 font-bold transition"
          >
            Movies
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-red-400 font-bold transition"
          >
            Actor
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-red-400 font-bold transition"
          >
            Web-Series
          </a>
        </nav>

        {/* Search & Icons */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-3"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-3xl text-black w-64 outline-none"
            placeholder="Search Any Movie..."
          />
          <button type="submit">
            <Search className="h-5 w-5 text-white cursor-pointer" />
          </button>
          <User className="h-6 w-6 text-white cursor-pointer" />
        </form>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-2 font-medium">
            <a href="/" className="text-white hover:text-red-400">
              Home
            </a>
            <a href="/allmovies" className="text-gray-300 hover:text-red-400">
              Movies
            </a>
            <a href="#" className="text-gray-300 hover:text-red-400">
              Actor
            </a>
            <a href="#" className="text-gray-300 hover:text-red-400">
              Web-Series
            </a>
          </nav>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 pt-4"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-3xl text-black outline-none"
              placeholder="Search Any Movie..."
            />
            <button type="submit">
              <Search className="h-5 w-5 text-white" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;

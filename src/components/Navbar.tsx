import React, { use, useEffect, useState } from 'react';
import { Film, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
const [searchQuery , setSearchQuery] = useState("")



  return (
<header className="container mx-auto flex  justify-between items-center px-16 py-8">
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Cine-Vault</span>
          </div>
        <div className="nav ">
        <nav className='flex gap-6 items-center font-poppins'>
            <a href="#home" className='text-white hover:text-red-400 transition-colors duration-200 font-bold'>Home</a>
            <a href='' className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold">Movies</a>
            <a href='' className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold">Actor</a>
            <a href='' className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-bold">Web-Series</a>
        </nav>
        </div>
        <div className="icons flex gap-4 text-black ">
          <input type="text" className='px-[24px] py-[12px] rounded-3xl' placeholder='Search Any Movie...'/>
            <Search className='h-6 w-6 cursor-pointer'/>
            <User className='h-6 w-6 cursor-pointer'/>
        </div>
      </header>
  )
}

export default Navbar

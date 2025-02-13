import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed w-full h-16 bg-gray-100 text-gray-800 z-50 shadow-sm">
      <div className="flex justify-between items-center h-full px-4 max-w-6xl mx-auto">
        <a href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors">
          Hicran Apaydın
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="font-medium hover:text-gray-600 transition-colors cursor-pointer"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center shadow-sm">
            <li className="py-4">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                onClick={() => setNav(false)}
                className="font-medium hover:text-gray-600 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
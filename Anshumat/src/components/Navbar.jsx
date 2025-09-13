import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ toggleTheme, dark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-100 text-white px-4 md:px-6 py-3 w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold">Anshumat</Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-800">Home</Link>
          <Link to="/about" className="hover:text-gray-800">About</Link>
          <Link to="/initiatives" className="hover:text-gray-800">Initiatives</Link>
          <Link to="/programs" className="hover:text-gray-800">Programs</Link>
          <Link to="/get-involved" className="hover:text-gray-800">Get Involved</Link>
          <Link to="/contact" className="hover:text-gray-800">Contact</Link>
          <Link to="/donate" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
            Donate
          </Link>
          <button onClick={toggleTheme} className="ml-2 p-1 rounded-full hover:bg-blue-700">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 pb-3">
          <Link to="/" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>About</Link>
          <Link to="/initiatives" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>Initiatives</Link>
          <Link to="/programs" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>Programs</Link>
          <Link to="/get-involved" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>Get Involved</Link>
          <Link to="/contact" className="hover:bg-blue-700 px-2 py-1 rounded" onClick={toggleMenu}>Contact</Link>
          <Link to="/donate" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 inline-block w-fit" onClick={toggleMenu}>
            Donate
          </Link>
          <button onClick={toggleTheme} className="p-1 rounded-full hover:bg-blue-700 w-fit">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

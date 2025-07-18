import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import image1 from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 


  const getLinkClass = (path) =>
    `font-semibold py-2 ${
      location.pathname === path ? 'text-blue-600' : 'text-gray-800'
    }`;

  return (
    <header className="bg-white shadow-sm h-[56px] px-6">
      <div className="max-w-screen-xl mx-auto my-auto py-2 px-2 flex items-center justify-between">
      
        <div className="flex items-center gap-x-8">
          <img src={image1} alt="Logo" className="h-8 w-auto ml-8" />

          
          <nav className="hidden md:flex gap-x-6 text-sm font-medium ml-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/services" className={getLinkClass('/services')}>Services</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <button className="flex items-center gap-2 bg-[#0093E5] hover:bg-[#007fc4] text-white px-4 py-2 rounded-md text-sm font-medium shadow">
            <ArrowRight size={16} />
            Request a Demo
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

     {menuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 pb-4">
    <nav className="flex flex-col gap-4 text-sm font-medium text-gray-800">
      <Link to="/" onClick={() => setMenuOpen(false)} className={getLinkClass('/')}>Home</Link>
      <Link to="/services" onClick={() => setMenuOpen(false)} className={getLinkClass('/services')}>Services</Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)} className={getLinkClass('/projects')}>Projects</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} className={getLinkClass('/about')}>About Us</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className={getLinkClass('/contact')}>Contact</Link>

      <button className="w-fit self-start flex items-center gap-2 bg-[#0093E5] hover:bg-[#007fc4] text-white px-4 py-2 rounded-md text-sm font-medium shadow mt-2">
        <ArrowRight size={16} />
        Request a Demo
      </button>
    </nav>
  </div>
)}

    </header>
  );
};

export default Navbar;

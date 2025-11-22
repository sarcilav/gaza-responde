import React, { useState, useEffect } from 'react';
import { Menu, X, Book } from 'lucide-react';
import { NAVIGATION, BOOK_DETAILS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <Book className={`h-8 w-8 ${isScrolled ? 'text-palestine-green' : 'text-palestine-darkGreen'}`} />
              <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Gaza Responde
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-palestine-green font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href={BOOK_DETAILS.buyLink}
              className="bg-palestine-green text-white px-5 py-2 rounded-full font-medium hover:bg-palestine-darkGreen transition-colors shadow-md"
            >
              Comprar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-palestine-green hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={BOOK_DETAILS.buyLink}
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-palestine-green text-white hover:bg-palestine-darkGreen"
              onClick={() => setIsOpen(false)}
            >
              Comprar Libro
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
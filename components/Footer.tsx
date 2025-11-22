import React from 'react';
import { BOOK_DETAILS } from '../constants';
import { Instagram, Mail } from 'lucide-react';
import { ShareButtons } from './ShareButtons';

interface FooterProps {
  onBuy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBuy }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-4">{BOOK_DETAILS.title}</h3>
            <p className="text-sm mb-4">
              1ra Edición en español.<br/>
              Originalmente editado por Refaat Alareer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre el Libro</a></li>
              <li><a href="#toc" className="hover:text-white transition-colors">Índice</a></li>
              <li>
                <button 
                  onClick={onBuy} 
                  className="text-palestine-green hover:text-white transition-colors font-bold cursor-pointer text-left"
                >
                  Comprar ahora
                </button>
              </li>
            </ul>
          </div>

          {/* Contact/Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:contacto@example.com" className="hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <ShareButtons variant="dark" />
            </div>

            <p className="mt-8 text-xs">
              &copy; {new Date().getFullYear()} Gaza Responde (Edición Español).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
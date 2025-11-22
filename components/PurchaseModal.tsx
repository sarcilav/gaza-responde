import React from 'react';
import { X, MessageCircle, Instagram } from 'lucide-react';
import { BOOK_DETAILS } from '../constants';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(`Hola, estoy interesado en comprar el libro "${BOOK_DETAILS.title}".`);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-palestine-green p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="font-serif text-2xl font-bold">Adquirir Libro</h3>
            <p className="text-white/90 text-sm mt-1">Proceso de compra manual</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <div className="mb-6 bg-slate-50 rounded-lg p-4 border border-slate-100">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-slate-600 font-medium">Precio:</span>
              <span className="text-2xl font-bold text-palestine-darkGreen">{BOOK_DETAILS.price}</span>
            </div>
            <div className="flex justify-between items-baseline">
               <span className="text-slate-500 text-sm">Envío:</span>
               <span className="text-slate-700 text-sm font-medium text-right">+ Costo de envío</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic text-center">
              (Envíos a todo el territorio nacional)
            </p>
          </div>

          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Para maximizar la donación a{' '}
            <a 
              href={BOOK_DETAILS.sameerUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-800 font-bold hover:text-palestine-green hover:underline"
            >
              The Sameer Project
            </a>{' '}
            y evitar comisiones de pasarelas de pago, manejamos los pedidos directamente.
          </p>

          <div className="space-y-3">
            <a 
              href={`https://wa.me/57${BOOK_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
            
            <a 
              href={`https://instagram.com/${BOOK_DETAILS.instagramUser.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity shadow-md"
            >
              <Instagram className="w-5 h-5" />
              Escribir al Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Translator } from './components/Translator';
import { Excerpts } from './components/Excerpts';
import { TableOfContents } from './components/TableOfContents';
import { Footer } from './components/Footer';
import { PurchaseModal } from './components/PurchaseModal';
import { BOOK_DETAILS } from './constants';

const App: React.FC = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsPurchaseModalOpen(true);
  };

  return (
    // Using HashRouter for compatibility with GitHub Pages
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-900">
        <Navbar onBuy={handleBuyClick} />
        
        <main className="flex-grow">
          <Hero onBuy={handleBuyClick} />
          <About />
          <Translator />
          <Excerpts />
          <TableOfContents />
          
          {/* CTA Section at bottom */}
          <section className="py-20 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif text-3xl font-bold mb-6">Solidaridad en Acción</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Al adquirir este libro, no solo ayudas a amplificar las voces de Palestina, sino que contribuyes directamente a la causa.
                <br className="hidden md:block" />
                <strong className="text-palestine-darkGreen block mt-2 text-xl">
                  El 100% de las ganancias serán donadas a{' '}
                  <a 
                    href={BOOK_DETAILS.sameerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-palestine-black"
                  >
                    The Sameer Project
                  </a>.
                </strong>
              </p>
              <button 
                onClick={handleBuyClick}
                className="inline-block bg-palestine-black text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg cursor-pointer"
              >
                Comprar el libro
              </button>
            </div>
          </section>
        </main>

        <Footer onBuy={handleBuyClick} />
        
        <PurchaseModal 
          isOpen={isPurchaseModalOpen} 
          onClose={() => setIsPurchaseModalOpen(false)} 
        />
      </div>
    </HashRouter>
  );
};

export default App;
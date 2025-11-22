import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { BOOK_DETAILS } from '../constants';
import { ShareButtons } from './ShareButtons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-palestine-green/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-palestine-red/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-palestine-green/10 text-palestine-darkGreen text-sm font-bold tracking-wide mb-6">
              {BOOK_DETAILS.edition}
            </span>
            
            {/* Title Image */}
            <h1 className="mb-8 block">
              <img 
                src={BOOK_DETAILS.titleImage} 
                alt={BOOK_DETAILS.title} 
                className="w-full max-w-[300px] md:max-w-[450px] h-auto object-contain -ml-1"
              />
              <span className="sr-only">{BOOK_DETAILS.title}</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
              {BOOK_DETAILS.subtitle}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Editado por <span className="font-semibold text-slate-900">{BOOK_DETAILS.originalEditor}</span>. <br/>
              Una traducción colaborativa que une a Palestina y Colombia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href={BOOK_DETAILS.buyLink}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-palestine-green hover:bg-palestine-darkGreen transition-all shadow-lg hover:shadow-xl"
              >
                Adquirir copia
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                Leer más
              </a>
            </div>

            {/* Donation Info Badge */}
            <div className="mb-10 inline-flex items-center gap-2 text-sm text-palestine-red font-medium bg-palestine-red/5 px-3 py-2 rounded-md border border-palestine-red/10">
              <Heart className="w-4 h-4 fill-palestine-red" />
              {BOOK_DETAILS.donationInfo}
            </div>

            <ShareButtons />
          </motion.div>

          {/* Book Image Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 md:w-80 aspect-[2/3] rounded-r-md shadow-2xl transform rotate-y-12 transition-transform hover:scale-105 duration-500 bg-palestine-green">
                {/* Realistic Book Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/30 to-transparent z-10"></div>
                
                {/* Cover Image */}
                <div className="absolute inset-0 bg-palestine-green overflow-hidden rounded-r-md flex flex-col border-l-2 border-white/10">
                   <img 
                    src={BOOK_DETAILS.coverPlaceholder} 
                    alt={`Portada del libro ${BOOK_DETAILS.title}`}
                    className="w-full h-full object-cover"
                   />
                   {/* Subtle overlay to give it depth/texture on top of the image */}
                   <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_20%)] pointer-events-none"></div>
                </div>
            </div>
            
            {/* Shadow underneath */}
            <div className="absolute -bottom-8 right-10 w-64 h-8 bg-black/20 blur-xl rounded-[100%]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { MapPin, Globe2 } from 'lucide-react';
import { TRANSLATION_DETAILS } from '../constants';

export const Translator: React.FC = () => {
  return (
    <section id="translator" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Graphic/Side Element */}
          <div className="md:col-span-5 relative">
            <div className="aspect-square rounded-full bg-white p-8 shadow-xl flex flex-col items-center justify-center text-center border-4 border-palestine-red/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:8px_8px]"></div>
              <Globe2 className="w-16 h-16 text-palestine-red mb-4" />
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">Colombia</h3>
              <div className="w-px h-8 bg-slate-300 my-2"></div>
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">Palestina</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Solidaridad Global</p>
            </div>
            
            {/* Decorative Blob */}
            <div className="absolute top-0 left-10 -ml-20 -mt-10 w-64 h-64 rounded-full bg-palestine-green/5 blur-3xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-palestine-red font-bold tracking-wide text-sm uppercase mb-4">
              <MapPin className="w-4 h-4" />
              Nota de la Editora 1ra Edición en español
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              {TRANSLATION_DETAILS.translator}
            </h2>

            <div className="prose prose-lg text-slate-600">
              <p className="leading-relaxed mb-6 border-l-4 border-palestine-green pl-6 italic text-slate-700">
                "{TRANSLATION_DETAILS.note}"
              </p>
              <p className="leading-relaxed">
                {TRANSLATION_DETAILS.motivation}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                   <p className="text-sm text-slate-500">
                     Esta edición representa un puente lingüístico y cultural, asegurando que las narrativas de resistencia de Gaza resuenen con fuerza en el mundo hispanohablante.
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
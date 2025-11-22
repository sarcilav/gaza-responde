import React from 'react';
import { Quote } from 'lucide-react';
import { EXCERPTS } from '../constants';

export const Excerpts: React.FC = () => {
  return (
    <section id="excerpts" className="py-20 bg-palestine-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold mb-2">Fragmentos Destacados</h2>
          <p className="text-palestine-green/20 text-lg">Palabras que resisten</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EXCERPTS.map((excerpt, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Quote className="h-8 w-8 text-white/60 mb-4" />
              <p className="font-serif text-xl leading-relaxed mb-6">
                "{excerpt.text}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold">{excerpt.source}</p>
                <p className="text-sm text-white/80">{excerpt.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
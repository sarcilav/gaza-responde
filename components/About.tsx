import React from 'react';
import { FEATURES, BOOK_DETAILS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">La Historia Detrás del Libro</h2>
          <div className="w-24 h-1 bg-palestine-green mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
            "{BOOK_DETAILS.description}"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.name} 
              className="bg-paper p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-palestine-green/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-palestine-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
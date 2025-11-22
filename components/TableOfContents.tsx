import React from 'react';
import { TABLE_OF_CONTENTS } from '../constants';

export const TableOfContents: React.FC = () => {
  return (
    <section id="toc" className="py-20 bg-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Índice de Contenidos</h2>
          <p className="text-slate-600">Una colección de 23 historias</p>
        </div>

        <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {TABLE_OF_CONTENTS.map((chapter, index) => (
              <li key={index} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex items-baseline justify-between group">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-bold text-slate-400 w-6">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-serif font-medium text-slate-800 group-hover:text-palestine-darkGreen transition-colors">
                    {chapter.title}
                  </span>
                </div>
                <span className="text-sm text-slate-500 italic hidden sm:block">
                  {chapter.author}
                </span>
              </li>
            ))}
            <li className="p-6 bg-slate-50 text-center text-slate-500 text-sm italic">
              ... y muchas más historias conmovedoras.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
'use client';

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

// Importez votre nouveau fichier CSS ici
import './landing.css'; 


// --- Composant de la carte 3D ---
const FloatingCard = () => (
    <div className="card3d relative inline-block bg-gradient-to-br from-[#0d0d11] via-[#111117] to-[#2f2f7a] rounded-lg bg-[200%] bg-center">
        {/* Image principale de la carte */}
        <div className="relative w-[25vw] h-[60vh] min-w-[250px] min-h-[300px] max-w-[350px] max-h-[500px] rounded-t-lg overflow-hidden grayscale mix-blend-lighten">
            {/* Superposition de dégradé sur l'image */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111117] via-[#111117]/80 to-transparent"></div>
            <img 
                src="https://placehold.co/350x500/cccccc/000000?text=Talent" 
                alt="Talent" 
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
        {/* Barres de graphique animées */}
        <div className="chartBar absolute top-[30%] right-[-20%] h-[80px] w-[40%] flex items-end justify-between" style={{transform: 'translateZ(30px)'}}>
            <span className="inline-block w-[15%] h-[20%] bg-red-500 shadow-[0_0_80px_var(--tw-shadow-color)] shadow-red-500" style={{animationDelay: '0s'}}></span>
            <span className="inline-block w-[15%] h-[60%] bg-green-400 shadow-[0_0_80px_var(--tw-shadow-color)] shadow-green-400" style={{animationDelay: '0.3s'}}></span>
            <span className="inline-block w-[15%] h-[40%] bg-red-500 shadow-[0_0_80px_var(--tw-shadow-color)] shadow-red-500" style={{animationDelay: '0.5s'}}></span>
            <span className="inline-block w-[15%] h-[70%] bg-green-400 shadow-[0_0_80px_var(--tw-shadow-color)] shadow-green-400" style={{animationDelay: '0.7s'}}></span>
            <span className="inline-block w-[15%] h-full bg-green-400 shadow-[0_0_80px_var(--tw-shadow-color)] shadow-green-400" style={{animationDelay: '1s'}}></span>
        </div>
    </div>
);


// --- Composant principal de la page d'accueil ---
export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#111117] text-white">
      {/* Arrière-plan */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/111117/111117?text=')] bg-cover bg-bottom"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
          {/* Colonne de gauche: Texte et CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase" style={{lineHeight: 1.2}}>
                  Investissez dans l&apos;avenir
              </h1>
              <p className="text-lg md:text-xl text-gray-400 my-8 max-w-xl mx-auto lg:mx-0">
                  Identifiez et investissez dans les talents de l&apos;esport : lorsque votre talent(s) est performant, vous gagnez.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                          type="email"
                          placeholder="Adresse Email"
                          className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder:text-gray-500"
                      />
                  </div>
                  <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-gray-700 rounded-md font-semibold hover:bg-white/10 transition-colors"
                  >
                      COMMENCER
                      <ArrowRight className="h-5 w-5" />
                  </button>
              </form>
          </div>

          {/* Colonne de droite: Carte 3D */}
          <div className="lg:w-1/2 flex justify-center items-center" style={{ perspective: '600px' }}>
              <FloatingCard />
          </div>
      </div>
    </main>
  );
}
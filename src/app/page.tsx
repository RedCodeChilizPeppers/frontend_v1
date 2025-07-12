'use client';

import React, { useEffect, useState } from 'react';

import './landing.css'; 


// --- Composant de la carte 3D ---
const FloatingCard = () => {
    // --- VOS IMAGES ICI ---
    // Remplacez ces liens par les vôtres.
    const images = [
        'Token-AM.svg',
        'Token-FCB.svg',
        'Token-OG.svg',
        'Token-PSG.svg',
        'Token-UFC.svg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change d'image toutes les 3 secondes

        return () => clearInterval(intervalId); // Nettoyage de l'intervalle
    }, [images.length]);


    return (
        <div className="card3d relative inline-block bg-gradient-to-br from-[#0d0d11] via-[#111117] to-[#2f2f7a] rounded-lg bg-[200%] bg-center">
            {/* Image principale de la carte */}
            <div className="relative w-[25vw] h-[60vh] min-w-[250px] min-h-[300px] max-w-[350px] max-h-[500px] rounded-t-lg overflow-hidden mix-blend-lighten">
                {/* Superposition de dégradé sur l'image */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111117] via-[#111117]/40 to-transparent"></div>
                
                {/* Diaporama d'images */}
                {images.map((src, index) => (
                    <img 
                        key={src}
                        src={src} 
                        alt={`Talent ${index + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                        style={{ opacity: index === currentIndex ? 1 : 0 }}
                    />
                ))}
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
};


// --- Composant principal de la page d'accueil ---
export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background text-foreground">
        {/* Arrière-plan */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-muted/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
            {/* Colonne de gauche: Texte et CTA */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase text-foreground" style={{lineHeight: 1.2}}>
                    Investissez dans l'avenir
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground my-8 max-w-xl mx-auto lg:mx-0">
                    Identifiez et investissez dans les talents de l'esport : lorsque votre talent(s) est performant, vous gagnez.
                </p>
            </div>

            {/* Colonne de droite: Carte 3D */}
            <div className="lg:w-1/2 flex justify-center items-center" style={{ perspective: '600px' }}>
                <FloatingCard />
            </div>
        </div>
      </main>
    </>
  );
}
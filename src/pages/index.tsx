import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';



// --- Composant de la carte 3D ---
const FloatingCard = () => {
    // --- YOUR IMAGES HERE ---
    // Replace these links with yours.
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
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval
    }, [images.length]);


    return (
        <div className="card3d relative inline-block bg-gradient-to-br from-[#0d0d11] via-[#111117] to-[#2f2f7a] rounded-lg bg-[200%] bg-center">
            {/* Main card image */}
            <div className="relative w-[25vw] h-[60vh] min-w-[250px] min-h-[300px] max-w-[350px] max-h-[500px] rounded-t-lg overflow-hidden mix-blend-lighten">
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111117] via-[#111117]/40 to-transparent"></div>
                
                {/* Image slideshow */}
                {images.map((src, index) => (
                    <Image
                        key={src}
                        src={src} 
                        alt={`Talent ${index + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                        style={{ opacity: index === currentIndex ? 1 : 0 }}
                    />
                ))}
            </div>
            {/* Animated chart bars */}
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
const Home: NextPage = () => {
  return (
    <>
      <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background text-foreground">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-muted/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
            {/* Left column: Text and CTA */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase text-foreground" style={{lineHeight: 1.2}}>
                    Invest in the future
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground my-8 max-w-xl mx-auto lg:mx-0">
                    Identify and invest in esports talents: when your talent(s) perform, you win.
                </p>
            </div>

            {/* Right column: 3D Card */}
            <div className="lg:w-1/2 flex justify-center items-center" style={{ perspective: '600px' }}>
                <FloatingCard />
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;

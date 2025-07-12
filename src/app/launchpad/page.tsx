// src/app/launchpad/page.tsx
'use client';

import React from 'react';
import { Rocket, Mail, ArrowDown } from 'lucide-react';

// --- Données de simulation pour les projets ---
// Dans une application réelle, ces données viendraient d'une API.
const launchpadProjects = [
    {
        name: "Votre projet esport",
        description: "Bientôt, vous pourrez faire connaître et financer vos projets esportifs directement sur notre plateforme.",
        imageUrl: "https://placehold.co/600x400/111827/7c3aed?text=Projet+Esport",
        raised: 87.9,
        endDate: 28,
    },
    {
        name: "Vous avez un projet ?",
        description: "Nous sommes à l'écoute des entrepreneurs et créateurs de contenu. Dites-nous en plus sur votre vision.",
        imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Contact",
        action: {
            label: "launchpad@lootin.gg",
            href: "mailto:launchpad@lootin.gg",
            icon: Mail
        }
    },
    {
        name: "Tournoi 'Genesis'",
        description: "Soutenez l'organisation de notre premier tournoi communautaire sur Valorant, avec des récompenses exclusives pour les investisseurs.",
        imageUrl: "https://placehold.co/600x400/111827/00ffe7?text=Tournoi",
        raised: 45.2,
        endDate: 54,
    },
];

// --- Composants ---

const ProjectCard = ({ project }: { project: typeof launchpadProjects[0] }) => (
    <div className="group relative bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
        <div 
            className="h-64 bg-cover bg-center" 
            style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>
        <div className="p-6">
            <h4 className="font-bold text-xl mb-2 text-foreground">{project.name}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed h-24">
                {project.description}
            </p>

            {project.raised && (
                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                        <span>{project.raised}% levés</span>
                        <span>{project.endDate} jours restants</span>
                    </div>
                    <div className="w-full bg-muted/40 rounded-full h-2.5">
                        <div 
                            className="bg-green-400 h-2.5 rounded-full" 
                            style={{ width: `${project.raised}%` }}
                        ></div>
                    </div>
                </div>
            )}
            
            {project.action && (
                 <a 
                    href={project.action.href}
                    className="inline-flex items-center justify-center gap-2 mt-4 w-full bg-primary/20 text-primary font-semibold py-2 px-4 rounded-md hover:bg-primary/30 transition-colors"
                >
                    <project.action.icon className="h-4 w-4" />
                    {project.action.label}
                </a>
            )}
        </div>
    </div>
);


export default function LaunchpadPage() {
    return (
        <>
            {/* Section Hero */}
            <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://placehold.co/1920x1080/111117/000000?text=Launchpad+Background')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#111117] to-transparent z-20"></div>

                <div className="relative z-30 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-wider uppercase" style={{lineHeight: 1.2}}>
                        Investissez dans les projets qui façonneront demain
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 my-8 max-w-2xl mx-auto">
                        Définissez le futur de l'esport en soutenant les projets les plus prometteurs, des équipes aux plateformes innovantes.
                    </p>
                    <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                        Découvrir les projets
                        <ArrowDown className="h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* Section des projets */}
            <section id="projects" className="relative py-20 bg-[#111117]">
                 <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Créer de nouvelles opportunités</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Nous mettons toute notre énergie pour voir l'esport grandir. Soutenez les créateurs, les équipes et les innovateurs qui construisent la prochaine génération de l'esport.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {launchpadProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

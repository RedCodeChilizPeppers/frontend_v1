'use client';

import { ArrowUpDown, ChevronDown, Search } from 'lucide-react';
import React from 'react';

// --- Données de simulation pour les talents ---
// Dans une application réelle, ces données viendraient d'une API.
const talents = [
    {
        name: 'ScreaM',
        symbol: 'SCM',
        game: 'Valorant',
        iconUrl: 'https://placehold.co/40x40/111827/FFF?text=S',
        price: 124.58,
        change24h: 5.21,
        marketCap: 12.3,
    },
    {
        name: 'ZywOo',
        symbol: 'ZYW',
        game: 'CS:GO',
        iconUrl: 'https://placehold.co/40x40/111827/FFF?text=Z',
        price: 98.23,
        change24h: -1.12,
        marketCap: 10.1,
    },
    {
        name: 'Faker',
        symbol: 'FKR',
        game: 'LoL',
        iconUrl: 'https://placehold.co/40x40/111827/FFF?text=F',
        price: 210.05,
        change24h: 12.89,
        marketCap: 25.6,
    },
    {
        name: 'Rekkles',
        symbol: 'RKL',
        game: 'LoL',
        iconUrl: 'https://placehold.co/40x40/111827/FFF?text=R',
        price: 76.44,
        change24h: 2.33,
        marketCap: 8.9,
    },
    {
        name: 's1mple',
        symbol: 'S1M',
        game: 'CS:GO',
        iconUrl: 'https://placehold.co/40x40/111827/FFF?text=S1',
        price: 150.76,
        change24h: -4.50,
        marketCap: 15.2,
    },
];

// Composant pour l'interface d'échange (Swap)
const SwapCard = () => (
    <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border max-w-md mx-auto shadow-lg shadow-primary/10">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">Échanger</h2>
            {/* Potentiellement des icônes pour les paramètres ici */}
        </div>

        {/* Input Token A */}
        <div className="bg-muted/40 p-4 rounded-lg border border-border mb-2">
            <div className="flex justify-between items-center">
                <input 
                    type="number" 
                    placeholder="0.0"
                    className="bg-transparent text-3xl font-mono w-full focus:outline-none text-foreground"
                />
                <button className="flex items-center gap-2 bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full transition-colors hover:bg-primary/30">
                    ETH <ChevronDown className="h-4 w-4" />
                </button>
            </div>
            <p className="text-muted-foreground text-sm mt-1">$0.00</p>
        </div>

        {/* Icône pour inverser */}
        <div className="flex justify-center my-[-1rem] z-10 relative">
            <button className="bg-muted border-4 border-background rounded-full p-2 transition-transform hover:rotate-180">
                <ArrowUpDown className="h-5 w-5 text-foreground" />
            </button>
        </div>

        {/* Input Token B */}
        <div className="bg-background p-4 rounded-lg border border-border mt-2 mb-4">
            <div className="flex justify-between items-center">
                <input 
                    type="number" 
                    placeholder="0.0"
                    className="bg-transparent text-3xl font-mono w-full focus:outline-none text-foreground"
                />
                <button className="flex items-center gap-2 bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full transition-colors hover:bg-primary/30">
                    Choisir <ChevronDown className="h-4 w-4" />
                </button>
            </div>
             <p className="text-muted-foreground text-sm mt-1">$0.00</p>
        </div>

        <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50">
            Connecter le portefeuille
        </button>
    </div>
);

// Composant principal de la page Marché
export default function MarchePage() {
    return (
        <div className="relative w-full min-h-screen text-foreground overflow-hidden">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                ></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Marché des Talents</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Échangez des tokens de talents et fournissez de la liquidité pour gagner des récompenses.
                    </p>
                </div>

                {/* Section Swap et Marché */}
                <div className="grid lg:grid-cols-3 gap-12">
                    
                    {/* Colonne de gauche: Swap Card */}
                    <div className="lg:col-span-1">
                        <SwapCard />
                    </div>

                    {/* Colonne de droite: Liste des talents */}
                    <div className="lg:col-span-2">
                        <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/10">
                            <div className="p-4 border-b border-border">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Rechercher un talent..."
                                        className="w-full pl-10 pr-4 py-2 bg-muted/40 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-max">
                                    <thead>
                                        <tr className="border-b border-border/50">
                                            <th className="text-left font-semibold p-4 text-muted-foreground">Talent</th>
                                            <th className="text-right font-semibold p-4 text-muted-foreground">Prix</th>
                                            <th className="text-right font-semibold p-4 text-muted-foreground">24h %</th>
                                            <th className="text-right font-semibold p-4 text-muted-foreground hidden sm:table-cell">Capitalisation</th>
                                            <th className="text-right font-semibold p-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {talents.map((talent) => (
                                            <tr key={talent.symbol} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                                                <td className="p-4">
                                                    <div className="flex items-center gap-4">
                                                        <img src={talent.iconUrl} alt={talent.name} className="h-10 w-10 rounded-full border-2 border-border" />
                                                        <div>
                                                            <p className="font-bold">{talent.name}</p>
                                                            <p className="text-sm text-muted-foreground">{talent.symbol}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right font-mono p-4">${talent.price.toFixed(2)}</td>
                                                <td className={`text-right font-mono p-4 ${talent.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {talent.change24h > 0 ? '+' : ''}{talent.change24h.toFixed(2)}%
                                                </td>
                                                <td className="text-right font-mono p-4 hidden sm:table-cell">${talent.marketCap}M</td>
                                                <td className="p-4 text-right">
                                                    <button className="bg-primary/20 text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary/30 transition-colors">
                                                        Échanger
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
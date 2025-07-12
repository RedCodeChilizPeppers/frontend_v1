'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// --- Simulation data for talents ---
// In a real application, this data would come from an API.
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

// Main component for the Marketplace page
export default function MarketplacePage() {
    return (
        <div className="relative w-full min-h-screen text-foreground overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                ></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Talent Marketplace</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover and invest in the best fan tokens of the ecosystem.
                    </p>
                </div>

                {/* Talent list section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/10">
                        <div className="p-4 border-b border-border">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search talent..."
                                    className="w-full pl-10 pr-4 py-2 bg-muted/40 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-max">
                                <thead>
                                    <tr className="border-b border-border/50">
                                        <th className="text-left font-semibold p-4 text-muted-foreground">Talent</th>
                                        <th className="text-right font-semibold p-4 text-muted-foreground">Price</th>
                                        <th className="text-right font-semibold p-4 text-muted-foreground">24h %</th>
                                        <th className="text-right font-semibold p-4 text-muted-foreground hidden sm:table-cell">Market Cap</th>
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
                                              <Link href={`/talent`}>
                                                <button className="bg-primary/20 text-primary font-semibold px-4 py-2 rounded-md hover:bg-primary/30 transition-colors">
                                                    View
                                                </button>
                                              </Link>
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
    );
}
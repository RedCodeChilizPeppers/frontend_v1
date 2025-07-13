'use client';

import React from 'react';
import { Users, UserPlus, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const topFans = [
    { name: 'SuperFan01', tokens: 15200, avatar: 'https://placehold.co/40x40/7c3aed/FFF?text=S' },
    { name: 'CryptoKnight', tokens: 12500, avatar: 'https://placehold.co/40x40/7c3aed/FFF?text=C' },
    { name: 'LTT_Holder', tokens: 9800, avatar: 'https://placehold.co/40x40/7c3aed/FFF?text=L' },
    { name: 'GamerInvest', tokens: 7650, avatar: 'https://placehold.co/40x40/7c3aed/FFF?text=G' },
];

export default function FanClubTab() {
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne de gauche: Annonces */}
            <div className="lg:col-span-2 space-y-8">
                 <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg shadow-primary/10">
                    <h3 className="text-xl font-bold mb-4">Annonce au Fan Club</h3>
                    <textarea 
                        placeholder="Écrivez votre message ici... Il sera envoyé à tous les détenteurs de votre token."
                        className="w-full h-32 p-4 bg-muted/40 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <button className="mt-4 w-full sm:w-auto bg-primary text-primary-foreground font-semibold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors">
                        Envoyer l&quot;annonce
                    </button>
                 </div>
            </div>

            {/* Colonne de droite: Stats & Top Fans */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg shadow-primary/5">
                    <h3 className="text-xl font-bold mb-4">Statistiques</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4"><Users className="h-6 w-6 text-primary" /> <div><p className="font-bold">1,890</p><p className="text-sm text-muted-foreground">Fans au total</p></div></li>
                        <li className="flex items-center gap-4"><UserPlus className="h-6 w-6 text-primary" /> <div><p className="font-bold">128</p><p className="text-sm text-muted-foreground">Nouveaux fans (30j)</p></div></li>
                        <li className="flex items-center gap-4"><MessageCircle className="h-6 w-6 text-primary" /> <div><p className="font-bold">72%</p><p className="text-sm text-muted-foreground">Taux d&quot;engagement</p></div></li>
                    </ul>
                </div>
                <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg shadow-primary/5">
                    <h3 className="text-xl font-bold mb-4">Top Fans</h3>
                     <ul className="space-y-4">
                        {topFans.map(fan => (
                            <li key={fan.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image src={fan.avatar} alt={fan.name} className="h-10 w-10 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{fan.name}</p>
                                        <p className="text-sm text-muted-foreground">{fan.tokens.toLocaleString()} $LTT</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

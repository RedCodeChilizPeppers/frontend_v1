'use client';

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Share2, Info, ArrowRight, CheckCircle, Trophy, Gamepad2, Shirt, Gift, Users } from 'lucide-react';

// --- Données de simulation ---
const talentDetails = {
    name: 'Faker',
    fullName: 'Lee Sang-hyeok "Faker"',
    price: 210.05,
    change24h: 12.89,
    game: 'League of Legends',
    category: 'Midlaner',
    contractLength: '3 Ans',
    introValue: '150.00 USD',
    totalSupply: '1,000,000',
    imageUrl: 'https://placehold.co/500x500/111827/FFF?text=Faker',
    description: 'Considéré comme le plus grand joueur de tous les temps sur League of Legends, Faker est une légende vivante. Investir dans son talent, c\'est investir dans une icône de l\'esport mondial.',
    socials: {
        twitter: '#',
        twitch: '#',
        instagram: '#'
    }
};

const chartDataAll = [
    { name: 'Jan', val: 150 },
    { name: 'Fev', val: 165 },
    { name: 'Mar', val: 160 },
    { name: 'Avr', val: 180 },
    { name: 'Mai', val: 175 },
    { name: 'Juin', val: 190 },
    { name: 'Juil', val: 210.05 },
];

const chartDataDay = [
    { name: '00:00', val: 205.1 },
    { name: '04:00', val: 206.5 },
    { name: '08:00', val: 208.2 },
    { name: '12:00', val: 207.5 },
    { name: '16:00', val: 209.8 },
    { name: '20:00', val: 210.05 },
];

const stats = [
    { label: 'Valeur du Talent', value: '25.6M€', icon: Trophy },
    { label: 'LTT en vente', value: '🚨 5,420', icon: Gamepad2 },
    { label: 'Statut', value: 'Vente Publique', icon: CheckCircle },
    { label: 'Participants', value: '1,890', icon: Users },
];

const rewards = [
    { title: 'Tapis de souris dédicacé', price: '45 $LTT', remaining: 19, isDone: false, icon: Gift },
    { title: 'Maillot dédicacé', price: '60 $LTT', remaining: 12, isDone: true, icon: Shirt },
    { title: 'Invitation privée', price: '150 $LTT', remaining: 4, isDone: false, icon: Gift },
];

// --- Composants ---

const TalentChart = () => {
    const [timeframe, setTimeframe] = useState('all');
    const data = timeframe === 'all' ? chartDataAll : chartDataDay;

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-border">
                    <p className="label text-sm text-muted-foreground">{`${label}`}</p>
                    <p className="intro font-bold text-foreground">{`$${payload[0].value.toFixed(2)}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-4 shadow-lg shadow-primary/10">
            <div className="flex justify-end mb-4">
                <div className="flex items-center bg-muted/40 border border-border rounded-md p-1">
                    {['Jour', 'Semaine', 'Mois', 'Tout'].map((item) => (
                         <button 
                            key={item}
                            onClick={() => setTimeframe(item.toLowerCase())}
                            className={`px-3 py-1 text-sm rounded-md transition-colors ${timeframe === item.toLowerCase() ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="val" stroke="var(--color-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const InfoCard = ({ talent }: { talent: typeof talentDetails }) => (
    <div className="lg:sticky lg:top-24">
        <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/10">
            <img src={talent.imageUrl} alt={talent.name} className="w-full h-auto object-cover" />
            <div className="p-6">
                <h3 className="font-bold text-lg mb-4">Informations</h3>
                <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Nom complet</span>
                        <span className="font-medium text-right">{talent.fullName}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Jeu</span>
                        <span className="font-medium">{talent.game}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Catégorie</span>
                        <span className="font-medium">{talent.category}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Contrat</span>
                        <span className="font-medium">{talent.contractLength}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Valeur Intro.</span>
                        <span className="font-medium">{talent.introValue}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-muted-foreground">Offre Totale</span>
                        <span className="font-medium">{talent.totalSupply}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default function TalentPage() {
    return (
        <div className="relative w-full min-h-screen text-foreground overflow-hidden">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Colonne de gauche : Infos */}
                    <div className="lg:col-span-1">
                        <InfoCard talent={talentDetails} />
                    </div>

                    {/* Colonne de droite : Contenu principal */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">{talentDetails.name}</h1>
                                    <div className="flex items-center gap-4 mt-2">
                                        <p className="text-3xl font-mono">${talentDetails.price.toFixed(2)}</p>
                                        <p className={`font-semibold ${talentDetails.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                            {talentDetails.change24h > 0 ? '+' : ''}{talentDetails.change24h.toFixed(2)}% (24h)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-md border border-border bg-background/50 hover:bg-muted/40"><Info className="h-4 w-4" /></button>
                                    <button className="p-2 rounded-md border border-border bg-background/50 hover:bg-muted/40"><Share2 className="h-4 w-4" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <TalentChart />

                        {/* Actions */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">Acheter</button>
                            <button className="w-full bg-muted/40 text-foreground font-bold py-3 rounded-lg border border-border hover:bg-muted/60 transition-colors">Vendre</button>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-4 text-center">
                                    <stat.icon className="h-6 w-6 mx-auto text-primary mb-2" />
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    <p className="font-bold text-lg">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">À propos de {talentDetails.name}</h2>
                            <p className="text-muted-foreground leading-relaxed">{talentDetails.description}</p>
                        </div>
                        
                        {/* Récompenses */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Récompenses exclusives</h2>
                            <div className="space-y-4">
                                {rewards.map((reward) => (
                                    <div key={reward.title} className={`bg-background/50 backdrop-blur-sm rounded-xl border p-4 flex items-center justify-between ${reward.isDone ? 'border-green-400/50' : 'border-border'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-full ${reward.isDone ? 'bg-green-400/20 text-green-400' : 'bg-primary/20 text-primary'}`}>
                                                <reward.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold">{reward.title}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {reward.isDone ? 'Déjà obtenu' : `🚨 ${reward.remaining} restants`}
                                                </p>
                                            </div>
                                        </div>
                                        <button disabled={reward.isDone} className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors disabled:bg-muted/40 disabled:text-muted-foreground disabled:cursor-not-allowed">
                                            {reward.isDone ? 'Obtenu' : reward.price}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

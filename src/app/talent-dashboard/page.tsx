'use client';

import React, { useState } from 'react';
import { DollarSign, Heart, ShoppingBag, User } from 'lucide-react';
import MerchTab from './merch-tab';
import './dashboard.css';
import FinanceTab from './finance-tab';
import FanClubTab from './fan-club-tab';

const tabs = [
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'fanclub', label: 'Fan Club', icon: Heart },
    { id: 'merch', label: 'Merchandising', icon: ShoppingBag },
];

export default function TalentDashboardPage() {
    const [activeTab, setActiveTab] = useState('finance');

    const renderContent = () => {
        switch (activeTab) {
            case 'finance':
                return <FinanceTab />;
            case 'fanclub':
                return <FanClubTab />;
            case 'merch':
                return <MerchTab />;
            default:
                return null;
        }
    };

    return (
        <div className="relative w-full min-h-screen text-foreground overflow-hidden bg-[#111117]">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Tableau de Bord Talent
                        </h1>
                        <p className="mt-2 text-lg text-muted-foreground">Bienvenue, Faker.</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border">
                         <img src="https://placehold.co/48x48/111827/FFF?text=F" alt="Faker" className="h-12 w-12 rounded-full" />
                         <div>
                            <p className="font-bold">Lee Sang-hyeok</p>
                            <p className="text-sm text-muted-foreground">faker@looting.gg</p>
                         </div>
                    </div>
                </div>

                {/* Onglets de navigation */}
                <div className="mb-8">
                    <div className="tabs-container">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                <tab.icon className="h-5 w-5" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Contenu des onglets */}
                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

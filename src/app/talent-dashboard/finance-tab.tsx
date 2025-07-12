'use client';

import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, BarChart, CircleDollarSign } from 'lucide-react';

const kpiData = [
    { label: "Revenu Total (30j)", value: "€12,450.78", change: "+15.2%", icon: TrendingUp },
    { label: "Prix du Token", value: "$210.05", change: "+1.8%", icon: CircleDollarSign },
    { label: "Nouveaux Détenteurs", value: "128", change: "+8.5%", icon: Users },
    { label: "Volume d'échange (24h)", value: "$250,123", change: "+22.1%", icon: BarChart },
];

const chartData = [
    { name: '01/07', revenue: 4000 }, { name: '05/07', revenue: 3000 },
    { name: '10/07', revenue: 2000 }, { name: '15/07', revenue: 2780 },
    { name: '20/07', revenue: 1890 }, { name: '25/07', revenue: 2390 },
    { name: '30/07', revenue: 3490 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-border">
                <p className="label text-sm text-muted-foreground">{`${label}`}</p>
                <p className="intro font-bold text-foreground">{`€${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function FinanceTab() {
    return (
        <div className="space-y-8">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map(kpi => (
                    <div key={kpi.label} className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg shadow-primary/5">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <kpi.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                                <p className="text-2xl font-bold">{kpi.value}</p>
                            </div>
                        </div>
                         <p className="text-sm text-green-400 mt-2">{kpi.change}</p>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg shadow-primary/10">
                <h3 className="text-xl font-bold mb-4">Revenus des 30 derniers jours</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

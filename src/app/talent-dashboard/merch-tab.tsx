// src/app/talent-dashboard/MerchTab.tsx
'use client';

import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

const merchItems = [
    { name: 'T-shirt Dédicacé', price: 35.00, stock: 150, imageUrl: 'https://placehold.co/300x300/111827/FFF?text=T-Shirt' },
    { name: 'Casquette "Faker"', price: 25.00, stock: 200, imageUrl: 'https://placehold.co/300x300/111827/FFF?text=Casquette' },
    { name: 'Poster Exclusif', price: 15.00, stock: 50, imageUrl: 'https://placehold.co/300x300/111827/FFF?text=Poster' },
];

const MerchModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-background border border-border rounded-xl p-8 w-full max-w-lg relative">
             <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X /></button>
             <h3 className="text-xl font-bold mb-6">Ajouter un nouvel article</h3>
             <form className="space-y-4">
                <div>
                    <label className="text-sm font-medium">Nom de l'article</label>
                    <input type="text" className="w-full mt-1 p-2 bg-muted/40 border border-border rounded-md" />
                </div>
                 <div>
                    <label className="text-sm font-medium">Prix (€)</label>
                    <input type="number" className="w-full mt-1 p-2 bg-muted/40 border border-border rounded-md" />
                </div>
                 <div>
                    <label className="text-sm font-medium">Stock</label>
                    <input type="number" className="w-full mt-1 p-2 bg-muted/40 border border-border rounded-md" />
                </div>
                 <div>
                    <label className="text-sm font-medium">URL de l'image</label>
                    <input type="text" className="w-full mt-1 p-2 bg-muted/40 border border-border rounded-md" />
                </div>
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onClose} className="py-2 px-4 rounded-md border border-border">Annuler</button>
                    <button type="submit" className="py-2 px-4 rounded-md bg-primary text-primary-foreground">Ajouter l'article</button>
                </div>
             </form>
        </div>
    </div>
);

export default function MerchTab() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {isModalOpen && <MerchModal onClose={() => setIsModalOpen(false)} />}
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Vos Articles en Vente</h3>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                    <PlusCircle className="h-5 w-5" />
                    Ajouter un article
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {merchItems.map(item => (
                    <div key={item.name} className="bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/5">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h4 className="font-bold">{item.name}</h4>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-lg text-primary font-semibold">€{item.price.toFixed(2)}</p>
                                <p className="text-sm text-muted-foreground">Stock: {item.stock}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

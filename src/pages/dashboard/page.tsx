'use client';

import React from 'react';
import { CheckCircle, Mail, User, MessageSquare, Wallet, ShoppingCart, Shield, ArrowRight } from 'lucide-react';

// --- Données de simulation pour les tâches d'onboarding ---
const onboardingTasks = [
    {
        title: "Vérifiez votre adresse e-mail",
        text: "Cliquez sur le lien envoyé par e-mail pour sécuriser votre compte.",
        textDone: "Adresse e-mail vérifiée.",
        linkText: "Renvoyer l'e-mail",
        isDone: true,
        icon: Mail,
    },
    {
        title: "Informations personnelles",
        text: "Remplissez les informations de votre compte pour débloquer toutes les fonctionnalités.",
        textDone: "Profil complété.",
        linkText: "Compléter maintenant",
        isDone: true,
        icon: User,
    },
    {
        title: "Rejoignez le Discord",
        text: "Rejoignez notre serveur Discord pour ne rien manquer de l'actualité.",
        textDone: "Bienvenue dans la communauté !",
        linkText: "Rejoindre le Discord",
        isDone: false,
        icon: MessageSquare,
    },
    {
        title: "Effectuez votre premier dépôt",
        text: "Déposez un minimum de 10€ pour commencer à investir.",
        textDone: "Vous êtes prêt à investir.",
        linkText: "Effectuer un dépôt",
        isDone: false,
        icon: Wallet,
    },
    {
        title: "Achetez votre premier LTT",
        text: "Commencez à utiliser le marché en achetant le token d'un talent.",
        textDone: "Vous avez du talent, vous aussi !",
        linkText: "Aller au Marché",
        isDone: false,
        icon: ShoppingCart,
    },
    {
        title: "Vérifiez votre profil (KYC)",
        text: "Effectuez la vérification d'identité pour des transactions sécurisées.",
        textDone: "Identité vérifiée.",
        linkText: "Vérifier mon profil",
        isDone: false,
        icon: Shield,
    },
];

// --- Composant ---

const OnboardingCard = ({ task, index }: { task: typeof onboardingTasks[0], index: number }) => (
    <div className={`bg-background/50 backdrop-blur-sm rounded-xl border p-6 flex flex-col justify-between shadow-lg transition-all duration-300 ${task.isDone ? 'border-green-400/50 shadow-green-500/5' : 'border-border shadow-primary/10'}`}>
        <div>
            <div className="flex items-center gap-4 mb-4">
                <div className={`flex items-center justify-center h-10 w-10 rounded-full ${task.isDone ? 'bg-green-400/20 text-green-400' : 'bg-primary/20 text-primary'}`}>
                    {task.isDone ? <CheckCircle className="h-6 w-6" /> : <span className="font-bold text-lg">{index + 1}</span>}
                </div>
                <h3 className="font-bold text-lg text-foreground">{task.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
                {task.isDone ? task.textDone : task.text}
            </p>
        </div>
        <button 
            disabled={task.isDone} 
            className="w-full mt-auto bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:bg-muted/40 disabled:text-muted-foreground disabled:cursor-not-allowed"
        >
            {task.isDone ? 'Terminé' : task.linkText}
            {!task.isDone && <ArrowRight className="h-4 w-4" />}
        </button>
    </div>
);


export default function DashboardPage() {
    return (
        <div className="relative w-full min-h-screen text-foreground overflow-hidden">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Tableau de bord</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Complétez toutes les étapes ci-dessous pour devenir un expert de la plateforme.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {onboardingTasks.map((task, index) => (
                        <OnboardingCard key={index} task={task} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
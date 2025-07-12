'use client';

import React, { useContext } from 'react';

// --- Dépendances pour la navigation du tableau de bord ---
// NOTE: Les importations spécifiques au projet (commençant par @/) ont été retirées
// pour la compatibilité avec l'environnement de prévisualisation.
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { Skeleton } from '@/components/ui/skeleton';
// import { ThemeToggle } from '@/components/ui/theme-toggle';
// import { DataContext } from '@/contexts/data-provider';
// import { ConnectKitButton } from 'connectkit';

import {
    DatabaseZap,
    Globe,
    Landmark,
    LayoutDashboard,
    LucideProps,
    Menu,
} from 'lucide-react';

// NOTE: Les composants <Link> de Next.js ont été remplacés par des balises <a>
// pour assurer la compatibilité avec l'environnement de prévisualisation.
// Pensez à les remplacer par <Link> de 'next/link' dans votre projet final.

// --- Mocks pour les composants et contextes non disponibles ---
const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => <span className={className}>{children}</span>;
const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
const Sheet = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const SheetTrigger = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const SheetContent = ({ children, ...props }: any) => <div {...props}>{children}</div>;
const Skeleton = ({ className }: { className?: string }) => <div className={`${className} bg-gray-700 animate-pulse`}></div>;
const ConnectKitButton = (props: any) => <Button {...props}>Connect Wallet</Button>;
const ThemeToggle = () => <Button>Toggle Theme</Button>;
const DataContext = React.createContext({ data: { eventLogsCount: 0, proposalsCount: 0, votesCount: 0 } });


// =================================================================
// SECTION 1: COMPOSANT HEADER POUR LA PAGE D'ACCUEIL (LANDING PAGE)
// =================================================================

const LandingPageLogo = () => (
    <a href="/" className="flex items-center gap-2 text-xl font-bold">
        {/* Remplacez ce SVG par votre logo */}
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80L50 20L80 80L50 60L20 80Z" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        <span className="text-white">LOOTING.GG</span>
    </a>
);

const LandingPageHeader = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <LandingPageLogo />
                        <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-md">
                            BETA
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/marche" className="text-sm text-gray-400 hover:text-white transition-colors">Marché</a>
                        <a href="/launchpad" className="text-sm text-gray-400 hover:text-white transition-colors">Launchpad</a>
                        <a href="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">Comment ça fonctionne ?</a>
                        <a href="/learn-more" className="text-sm text-gray-400 hover:text-white transition-colors">En savoir plus</a>
                    </nav>
                    <div className="flex items-center gap-6">
                        <a href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Se connecter</a>
                        <a href="/signup" className="text-sm font-medium px-4 py-2 rounded-md border border-gray-700 hover:bg-white/10 transition-colors">S&apos;inscrire</a>
                        <button className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                            <Globe className="h-4 w-4" />
                            Français
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


// =================================================================
// SECTION 2: COMPOSANT PRINCIPAL DE NAVIGATION (LOGIQUE CONDITIONNELLE)
// =================================================================

type PageType = {
    count: number | undefined | null;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>;
    label: string;
    url: string;
};

export function MainNavigation({ children }: { children: React.ReactNode }) {
    // Remplacement pour usePathname qui ne fonctionne pas dans cet environnement
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    
    // Remplacement pour le contexte qui n'est pas disponible
    const { data } = useContext(DataContext) || { data: { eventLogsCount: 5, proposalsCount: 12, votesCount: 8 } };


    // Si nous sommes sur la page d'accueil, on affiche le layout de la landing page.
    if (pathname === '/') {
        return (
            <div className="bg-gray-900 text-white">
                <LandingPageHeader />
                <main>{children}</main>
            </div>
        );
    }

    // --- Sinon, on affiche le layout du tableau de bord (votre code original) ---
    const pages: PageType[] = [
        { count: null, icon: LayoutDashboard, label: 'Dashboard', url: '/dashboard' },
        { count: null, icon: DatabaseZap, label: 'List Talents', url: '/list-talent' },
        { count: null, icon: DatabaseZap, label: 'Talent', url: '/talent' },
    ];

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-900 text-white">
            <div className="hidden border-r border-gray-800 bg-gray-900/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b border-gray-800 px-4 lg:h-[60px] lg:px-6">
                        <a href="/" className="flex items-center gap-2 font-semibold">
                            <Landmark className="h-6 w-6" />
                            <span>The Ballot Project</span>
                        </a>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {pages.map((page, index) => (
                                <a key={index} href={page.url} className={`${pathname === page.url ? 'bg-gray-800' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white`}>
                                    <page.icon className="h-4 w-4" />
                                    {page.label}
                                    {page.count === undefined ? (
                                        <Skeleton className="ml-auto h-6 w-6 rounded-full" />
                                    ) : page.count !== null && (
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600">
                                            {page.count}
                                        </Badge>
                                    )}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b border-gray-800 bg-gray-900/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger>
                            <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-transparent border-gray-700 hover:bg-gray-800">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col bg-gray-900 border-r border-gray-800">
                            <nav className="grid gap-2 text-lg font-medium">
                                <a href="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
                                    <Landmark className="h-6 w-6" />
                                    <span>The Ballot Project</span>
                                </a>
                                {pages.map((page, index) => (
                                    <a key={index} href={page.url} className={`${pathname === page.url ? 'bg-gray-800' : ''} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white`}>
                                        <page.icon className="h-5 w-5" />
                                        {page.label}
                                        {page.count === undefined ? (
                                            <Skeleton className="ml-auto h-6 w-6 rounded-full" />
                                        ) : page.count !== null && (
                                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600">
                                                {page.count}
                                            </Badge>
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1"></div>
                    <ThemeToggle />
                    <ConnectKitButton showAvatar={true} showBalance={true} />
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full max-w-screen-md place-self-center">
                    {children}
                </main>
            </div>
        </div>
    );
}

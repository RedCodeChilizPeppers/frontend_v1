'use client';

import Link from 'next/link';
import {
    DatabaseZap,
    Globe,
    Landmark,
    LayoutDashboard,
    LucideProps,
    Menu,
    ScrollText,
    Users,
    Vote,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { usePathname } from 'next/navigation';
import { ConnectKitButton } from 'connectkit';
import { useContext } from 'react';
import { DataContext } from '@/contexts/data-provider';
import { Skeleton } from '@/components/ui/skeleton';

type PageType = {
    count: number | undefined | null;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>;
    label: string;
    url: string;
};
const Logo = () => (
    <a href="/" className="flex items-center gap-2 text-xl font-bold">
        {/* Remplacez ce SVG par votre logo */}
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80L50 20L80 80L50 60L20 80Z" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        <span className="text-white">CGT</span>
    </a>
);
const Header = (props: { pages: PageType[], pathname: string }) => {
    return (
        
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <Logo />
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
                </div>
            </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Landmark className="h-6 w-6" />
                                    <span>The Ballot Project</span>
                                </Link>
                                {props.pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        href={page.url}
                                        className={`${props.pathname === page.url && 'bg-muted'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground`}
                                    >
                                        <page.icon className="h-5 w-5" />
                                        {page.label}
                                        {page.count === undefined ? (
                                            <Skeleton className="ml-auto h-6 w-6 rounded-full" />
                                        ) : page.count === null ? (
                                            <></>
                                        ) : (
                                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                                {page.count}
                                            </Badge>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1"></div>
                    <ThemeToggle />
                    <ConnectKitButton showAvatar={true} showBalance={true} />
                </header>

    );
};
export function MainNavigation({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const {
        data: { eventLogsCount, proposalsCount, votesCount },
    } = useContext(DataContext);

    const pages: PageType[] = [
        {
            count: null,
            icon: LayoutDashboard,
            label: 'Dashboard',
            url: '/dashboard',
        },
        {
            count: null,
            icon: DatabaseZap,
            label: 'List Talents',
            url: '/list-talent',
        },
        {
            count: null,
            icon: DatabaseZap,
            label: 'Talent',
            url: '/talent',
        },
    ];

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Landmark className="h-6 w-6" />
                            <span>The Ballot Project</span>
                        </Link>
                    </div>
                    

                </div>
            </div>
            <div className="flex flex-col">
                        <Header pages={pages} pathname={pathname}/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full max-w-screen-md place-self-center">
                    {children}
                </main>
            </div>
        </div>
    );
}

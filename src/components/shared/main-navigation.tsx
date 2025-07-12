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
import  cgt_white_goat  from '../../../public/cgt_white_goat.svg';
import Image from 'next/image';
type PageType = {
    count: number | undefined | null;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>;
    label: string;
    url: string;
};
const Logo = () => (
    <a href="/" className="flex items-center gap-2 text-xl font-bold">
        {/* Remplacez ce SVG par votre logo */}
        <Image width={100} height={50} src={cgt_white_goat} alt=""/>
        <span className="text-white">CGT</span>
    </a>
);
const Header = (props: { pages: PageType[], pathname: string }) => {
    return (
        
        <header className="flex z-40 h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-md">
                            HACKATHON
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/list-talent" className="text-sm text-gray-400 hover:text-white transition-colors">Marché</a>
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
                                    <span>Chiliz Got Talent</span>
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
        <div className="grid min-h-screen w-full">
            <div className="flex flex-col">
                        <Header pages={pages} pathname={pathname}/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full place-self-center">
                    {children}
                </main>
            </div>
        </div>
    );
}

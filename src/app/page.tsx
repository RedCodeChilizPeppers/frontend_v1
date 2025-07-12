import { ArrowRight, Mail } from 'lucide-react';

const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
    >
        <path
            d="M256 7.7l176 176-176 176-176-176L256 7.7z"
            stroke="currentColor"
            strokeWidth={32}
        />
    </svg>
);

export default function Home() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* SECTION 1: HERO */}
            <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Effet de grille en arrière-plan */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>

                <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Colonne de gauche: Texte et CTA */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {"INVESTISSEZ DANS L'AVENIR"}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                            Identifiez et investissez dans les talents de
                            l&apos;esport : lorsque votre talent(s) est
                            performant, vous gagnez.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                            <div className="relative flex-grow">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="email"
                                    placeholder="Adresse Email"
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-muted-foreground"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-border rounded-md text-foreground font-semibold hover:bg-white/10 transition-colors"
                            >
                                COMMENCER
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    {/* Colonne de droite: Visuel */}
                    <div className="lg:w-1/2 flex items-center justify-center p-8">
                        {/* --- REMPLACEZ CECI PAR VOTRE VISUEL --- */}
                        {/* Pour un effet similaire à l'image, vous pourriez utiliser une animation 3D (ex: Three.js) ou une image/vidéo */}
                        <div className="w-64 h-80 bg-gray-900/50 rounded-lg border border-border flex items-end p-4 gap-2 shadow-2xl shadow-primary/20">
                            <div className="w-1/4 h-1/4 bg-red-500 rounded-sm animate-pulse delay-300"></div>
                            <div className="w-1/4 h-1/2 bg-cyan-400 rounded-sm animate-pulse"></div>
                            <div className="w-1/4 h-1/3 bg-cyan-400 rounded-sm animate-pulse delay-500"></div>
                            <div className="w-1/4 h-3/4 bg-cyan-400 rounded-sm animate-pulse delay-200"></div>
                        </div>
                        {/* --- FIN DU VISUEL À REMPLACER --- */}
                    </div>
                </div>
            </section>

            {/* SECTION 2: FEATURES */}
            <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Colonne de gauche: Texte et liste */}
                    <div className="lg:pr-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            {
                                "Investissez dans les talents du gaming et de l'esport"
                            }
                        </h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <DiamondIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">
                                    {
                                        "Acheter et vendre des tokens de talent comme si vous achetiez des actions d'entreprise."
                                    }
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <DiamondIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">
                                    Obtenez des récompenses exclusives de la
                                    part de votre talents esport préféré.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <DiamondIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">
                                    Créer de la valeur ajoutée en investissant
                                    sur le bon talent.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <DiamondIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">
                                    Bientôt : Investissez sur des structures
                                    esportives et des projets innovants dans le
                                    gaming.
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* Colonne de droite: Image du téléphone */}
                    <div className="flex items-center justify-center">
                        {/* --- REMPLACEZ CECI PAR VOTRE IMAGE --- */}
                        <img
                            src="https://placehold.co/350x700/101118/FFF?text=Votre+App"
                            alt="Application mobile"
                            className="max-w-xs w-full rounded-3xl shadow-2xl shadow-primary/10"
                            // onError={(e) => {
                            //     e.currentTarget.src =
                            //         'https://placehold.co/350x700/101118/FFF?text=Image+non+disponible';
                            // }}
                        />
                        {/* --- FIN DE L'IMAGE À REMPLACER --- */}
                    </div>
                </div>
            </section>
        </main>
    );
}

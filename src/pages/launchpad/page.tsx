// src/app/launchpad/page.tsx
'use client';

import React from 'react';
import { Rocket, Mail, ArrowDown } from 'lucide-react';

// --- Simulation data for projects ---
// In a real application, this data would come from an API.
const launchpadProjects = [
    {
        name: "Your esports project",
        description: "Soon, you'll be able to showcase and fund your esports projects directly on our platform.",
        imageUrl: "https://placehold.co/600x400/111827/7c3aed?text=Esports+Project",
        raised: 87.9,
        endDate: 28,
    },
    {
        name: "Have a project?",
        description: "We're listening to entrepreneurs and content creators. Tell us more about your vision.",
        imageUrl: "https://placehold.co/600x400/111827/ffffff?text=Contact",
        action: {
            label: "launchpad@chilizgottalent.com",
            href: "mailto:launchpad@chilizgottalent.com",
            icon: Mail
        }
    },
    {
        name: "'Genesis' Tournament",
        description: "Support the organization of our first community tournament on Valorant, with exclusive rewards for investors.",
        imageUrl: "https://placehold.co/600x400/111827/00ffe7?text=Tournament",
        raised: 45.2,
        endDate: 54,
    },
];

// --- Components ---

const ProjectCard = ({ project }: { project: typeof launchpadProjects[0] }) => (
    <div className="group relative bg-background/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
        <div 
            className="h-64 bg-cover bg-center" 
            style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>
        <div className="p-6">
            <h4 className="font-bold text-xl mb-2 text-foreground">{project.name}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed h-24">
                {project.description}
            </p>

            {project.raised && (
                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                        <span>{project.raised}% raised</span>
                        <span>{project.endDate} days left</span>
                    </div>
                    <div className="w-full bg-muted/40 rounded-full h-2.5">
                        <div 
                            className="bg-green-400 h-2.5 rounded-full" 
                            style={{ width: `${project.raised}%` }}
                        ></div>
                    </div>
                </div>
            )}
            
            {project.action && (
                 <a 
                    href={project.action.href}
                    className="inline-flex items-center justify-center gap-2 mt-4 w-full bg-primary/20 text-primary font-semibold py-2 px-4 rounded-md hover:bg-primary/30 transition-colors"
                >
                    <project.action.icon className="h-4 w-4" />
                    {project.action.label}
                </a>
            )}
        </div>
    </div>
);


export default function LaunchpadPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://placehold.co/1920x1080/111117/000000?text=Launchpad+Background')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#111117] to-transparent z-20"></div>

                <div className="relative z-30 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-wider uppercase" style={{lineHeight: 1.2}}>
                        Invest in projects that will shape tomorrow
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 my-8 max-w-2xl mx-auto">
                        Define the future of esports by supporting the most promising projects, from teams to innovative platforms.
                    </p>
                    <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
                        Discover Projects
                        <ArrowDown className="h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* Projects section */}
            <section id="projects" className="relative py-20 bg-[#111117]">
                 <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Creating New Opportunities</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            We put all our energy into seeing esports grow. Support creators, teams, and innovators who are building the next generation of esports.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {launchpadProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

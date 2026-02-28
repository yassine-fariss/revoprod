const teamMembers = [
    {
        name: "Mohcine Rafik",
        role: "Videographer",
        image: "/teams/mohcine rafik.png"
    },
    {
        name: "Abdessamad Ghazi",
        role: "Photographer",
        image: "/teams/abdelsamad ghazi.webp"
    },
    {
        name: "Othmane Haddach",
        role: "Video Editor",
        image: "/team-placeholder.jpg"
    },
    {
        name: "Soukaina Laanaya",
        role: "Social Media Marketer",
        image: "/teams/soukaina .jpeg"
    }
];

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            {/* Existing About Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter">
                        À <span className="text-revo-gold">Propos</span>
                    </h1>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed animate-fade-in-delay-1">
                        <p>
                            Revo Production est une agence créative premium basée à Casablanca, spécialisée dans la production vidéo de haute qualité et la création de contenu digital.
                        </p>
                        <p>
                            Notre mission est de transformer la vision de nos clients en expériences visuelles captivantes. Nous combinons une expertise technique rigoureuse avec une approche artistique audacieuse.
                        </p>
                    </div>
                </div>

                {/* Abstract shape representing an image placeholder without actually adding an image */}
                <div className="hidden lg:block relative h-full min-h-[400px] w-full border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent animate-fade-in-delay-2 overflow-hidden flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-revo-gold/10 rounded-full blur-3xl"></div>
                    <p className="text-gray-600 font-medium tracking-widest uppercase text-sm">Visual Excellence</p>
                </div>
            </div>

            {/* Team Section */}
            <div className="animate-fade-in-delay-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter text-center">
                    Notre <span className="text-revo-gold">Équipe</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-revo-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(198,167,94,0.15)] flex flex-col"
                        >
                            {/* Image Container with aspect ratio forcing a square */}
                            <div className="relative aspect-square w-full overflow-hidden bg-black/50">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />

                                {/* Fallback Icon for Placeholder (Will show until real images are used) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none">
                                    <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="p-6 text-center transform transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-revo-gold font-medium text-sm tracking-wider uppercase">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

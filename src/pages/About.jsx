const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
        </div>
    );
};

export default About;

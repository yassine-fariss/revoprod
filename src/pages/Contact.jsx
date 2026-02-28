const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter">
                Nous <span className="text-revo-gold">Contacter</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 animate-fade-in-delay-1">
                Êtes-vous prêt à démarrer votre prochain projet ? Parlons-en. Nous serons ravis de collaborer avec vous pour donner vie à vos idées.
            </p>

            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-revo-gold/80 to-white/20 animate-fade-in-delay-2">
                <a
                    href="mailto:contact@revoproduction.com"
                    className="block px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-revo-gold hover:text-black transition-all duration-500"
                >
                    contact@revoproduction.com
                </a>
            </div>
        </div>
    );
};

export default Contact;

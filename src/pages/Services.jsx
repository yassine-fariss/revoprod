const Services = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter">
                    Nos <span className="text-revo-gold">Services</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-16 animate-fade-in-delay-1">
                    Découvrez nos prestations de production vidéo et nos solutions de création digitale sur mesure.
                </p>
            </div>

            {/* Service placeholders for future content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay-2">
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-white">Production Vidéo</h3>
                    <p className="text-gray-400">Publicités, vidéos d'entreprise, clips musicaux, et couverture d'événements.</p>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-white">Création Digitale</h3>
                    <p className="text-gray-400">Motion design, contenu pour les réseaux sociaux, et stratégies digitales.</p>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-white">Post-Production</h3>
                    <p className="text-gray-400">Montage professionnel, étalonnage des couleurs, et effets visuels.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;

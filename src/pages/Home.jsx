import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-80px)]">
            {/* Hero Section */}
            <section className="flex-grow flex flex-col justify-center items-center text-center px-6 relative overflow-hidden py-20">
                {/* Abstract Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-revo-gold/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none"></div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 animate-fade-in leading-tight">
                    Production Vidéo & Création Digitale <br className="hidden md:block" />
                    <span className="text-revo-gold">à Casablanca</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-14 font-medium animate-fade-in-delay-1 leading-relaxed">
                    Une agence de production de pointe axée sur la créativité, l'innovation, et l'excellence visuelle. Nous donnons vie à vos idées.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2 w-full sm:w-auto">
                    <Link
                        to="/services"
                        className="w-full sm:w-auto px-10 py-4 bg-revo-gold text-black text-lg font-bold rounded-full hover:bg-white transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(198,167,94,0.2)] hover:shadow-[0_0_40px_rgba(198,167,94,0.5)]"
                    >
                        Voir nos services
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:border-revo-gold hover:text-revo-gold transition-all duration-500"
                    >
                        Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

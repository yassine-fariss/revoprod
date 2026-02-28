import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Link to="/" className="text-xl font-bold tracking-tighter text-white mb-2">
                        REVO<span className="text-revo-gold">.</span>
                    </Link>
                    <p className="text-gray-400 text-sm">
                        Production Vidéo & Création Digitale
                    </p>
                </div>

                <div className="text-gray-500 text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Revo Production. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

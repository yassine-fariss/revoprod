import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        // Services will be handled specially
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Services Overview', path: '/services' },
        { name: 'Portfolio: Photographie', path: '/photographie' }
        // We can add video portfolio here later
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/logo.png" alt="REVO Productions Logo" className="h-24 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors hover:text-revo-gold duration-300 ${location.pathname === '/' ? 'text-revo-gold' : 'text-gray-300'}`}
                        >
                            Home
                        </Link>

                        {/* Dropdown Container */}
                        <div
                            className="relative py-8" // Padding to keep hover active between link and menu
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                        >
                            <Link
                                to="/services"
                                className={`text-sm flex items-center gap-1 font-medium transition-colors hover:text-revo-gold duration-300 ${location.pathname.includes('/services') || location.pathname.includes('/photographie') ? 'text-revo-gold' : 'text-gray-300'}`}
                            >
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 ease-out origin-top ${isServicesHovered ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                                    }`}
                            >
                                <div className="py-2 flex flex-col">
                                    {serviceLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-revo-gold ${location.pathname === link.path ? 'bg-white/5 text-revo-gold' : 'text-gray-300'
                                                }`}
                                            onClick={() => setIsServicesHovered(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors hover:text-revo-gold duration-300 ${location.pathname === '/about' ? 'text-revo-gold' : 'text-gray-300'}`}
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors hover:text-revo-gold duration-300 ${location.pathname === '/contact' ? 'text-revo-gold' : 'text-gray-300'}`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

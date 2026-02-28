import { useState } from 'react';

// Placeholder image array - will be replaced with real assets later
const photoGallery = [
    { id: 1, src: '/Photo/DSC01111-1.jpg.jpeg', alt: 'Commercial Shoot' },
    { id: 2, src: '/Photo/DSC09108copy.jpg.jpeg', alt: 'Fashion Photography' },
    { id: 3, src: '/Photo/DSC01208-1.jpg.jpeg', alt: 'Portrait Session' },
    { id: 4, src: '/Photo/DSC09198copy.jpg.jpeg', alt: 'Event Coverage' },
    { id: 5, src: '/Photo/DSC09447.jpg.jpeg', alt: 'Product Photography' },
    { id: 6, src: '/Photo/WhatsApp Image 2026-02-27 at 15.11.31.jpeg', alt: 'Architecture' },
    { id: 7, src: '/Photo/DSC09485.jpg.jpeg', alt: 'Studio Work' },
    { id: 8, src: '/Photo/DSC01230-1.jpg.jpeg', alt: 'Editorial' },
    { id: 9, src: '/Photo/DSC01117-1.jpg.jpeg', alt: 'Lifestyle' },
    { id: 10, src: '/Photo/DSC01123-1.jpg.jpeg', alt: 'Brand Campaign' },
    { id: 11, src: '/Photo/DSC01291-1.jpg.jpeg', alt: 'Creative Direction' },
    { id: 12, src: '/Photo/DSC01292-1.jpg.jpeg', alt: 'Urban Focus' },
    { id: 13, src: '/Photo/DSC09116copy.jpg.jpeg', alt: 'High Fashion' },
    { id: 14, src: '/Photo/DSC09124copy.jpg.jpeg', alt: 'Cinematic Portrait' },
    { id: 15, src: '/Photo/DSC09135copy2Crop.jpg.jpeg', alt: 'Detail Shot' },
    { id: 16, src: '/Photo/DSC09156copy2Crop.jpg.jpeg', alt: 'Color Grading' },
    { id: 17, src: '/Photo/DSC09187copy2Crop.jpg.jpeg', alt: 'Symmetry' },
    { id: 18, src: '/Photo/DSC09205copy.jpg.jpeg', alt: 'Night Scene' },
    { id: 19, src: '/Photo/DSC09306.jpg.jpeg', alt: 'Abstract Composition' },
    { id: 20, src: '/Photo/DSC09446.jpg.jpeg', alt: 'Corporate Event' }
];

const Photographie = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        // Restore scrolling
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in relative z-0">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
                    Notre <span className="text-revo-gold">Portfolio</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in-delay-1">
                    Découvrez l'essence de notre vision à travers notre galerie de photographies professionnelles.
                </p>
            </div>

            {/* True Masonry Layout using CSS Columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-fade-in-delay-2">
                {photoGallery.map((photo, index) => (
                    <div
                        key={photo.id}
                        onClick={() => openLightbox(photo)}
                        className="group relative overflow-hidden rounded-xl bg-white/5 cursor-pointer break-inside-avoid"
                    >
                        {/* Image Layer - Removing aspect ratio wrapper allowing natural image height */}
                        <img
                            src={photo.src}
                            alt={photo.alt || `Photography sample ${index + 1}`}
                            loading="lazy"
                            className="w-full h-auto block transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />

                        {/* Missing Image Fallback UI (Will naturally size itself based on default img behavior if missing) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity pointer-events-none bg-black/50">
                            {/* Keep the fallback hidden if the image loads fine */}
                        </div>

                        {/* Hover Overlay Title with elegant gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 border border-white/0 group-hover:border-revo-gold/50 rounded-xl">
                            <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
                                {photo.alt || "Afficher l'image"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal (Pure React/CSS) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white hover:text-revo-gold transition-colors z-10"
                        onClick={closeLightbox}
                        aria-label="Close modal"
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal Content */}
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] w-auto object-contain rounded-md shadow-2xl"
                        />
                        <p className="text-white/80 mt-4 text-center tracking-wide font-medium">
                            {selectedImage.alt}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photographie;

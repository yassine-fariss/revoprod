import { useState } from 'react';

// Placeholder image array - will be replaced with real assets later
const photoGallery = [
    { id: 1, src: '/DSC01111-1.jpg.jpeg', alt: 'Commercial Shoot' },
    { id: 2, src: '/photo-2.jpg', alt: 'Fashion Photography' },
    { id: 3, src: '/photo-3.jpg', alt: 'Portrait Session' },
    { id: 4, src: '/photo-4.jpg', alt: 'Event Coverage' },
    { id: 5, src: '/photo-5.jpg', alt: 'Product Photography' },
    { id: 6, src: '/photo-6.jpg', alt: 'Architecture' },
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
            <div className="mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
                    Notre <span className="text-revo-gold">Portfolio</span> Photographie
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed animate-fade-in-delay-1">
                    Découvrez notre galerie de photographies professionnelles. D'une esthétique commerciale aux des portraits saisissants, nous capturons l'essence de chaque instant.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px] animate-fade-in-delay-2">
                {photoGallery.map((photo, index) => (
                    <div
                        key={photo.id}
                        onClick={() => openLightbox(photo)}
                        className={`group relative overflow-hidden rounded-xl bg-white/5 cursor-pointer 
              ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                    >
                        {/* Image Placeholder wrapper / Image load */}
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />

                        {/* Missing Image Fallback UI (Remove this once images are added) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none bg-black/50">
                            <svg className="w-12 h-12 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium tracking-widest uppercase">{photo.alt}</span>
                        </div>

                        {/* Hover Overlay Title */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {photo.alt}
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

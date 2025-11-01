/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGallery } from '../hooks/useApi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { data: artworks, loading, error } = useGallery();

  if (loading) {
    return (
      <section id="gallery" className="section-container bg-gray-50">
        <div className="container-responsive">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !artworks) {
    return (
      <section id="gallery" className="section-container bg-gray-50">
        <div className="container-responsive">
          <div className="text-center py-16">
            <p className="text-red-600">Error loading gallery: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % artworks.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? artworks.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-container bg-gray-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 mb-4">
            Personal Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Beyond professional communication, I explore creative expression through visual art.
            These personal projects reflect my artistic journey and cultural heritage.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.length > 0 && artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // viewport={{ once: true }}
              className="group cursor-pointer"
            // onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300"
                  style={{ backgroundImage: `url(${artwork.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">{artwork.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Art as Expression
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Art has always been my sanctuary—a space where I can explore emotions,
              capture moments, and express ideas that words sometimes cannot convey.
              Each sketch represents a moment of reflection, a story waiting to be told,
              or simply the joy of creating something beautiful with my own hands.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={artworks[selectedImage].image}
                alt={artworks[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {artworks[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {artworks[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
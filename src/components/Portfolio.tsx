'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { usePortfolio } from '../hooks/useApi';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { data: portfolioItems, loading, error } = usePortfolio();

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'media', label: 'Media Hosting' },
    { id: 'pr', label: 'PR Campaigns' }
  ];

  if (loading) {
    return (
      <section id="portfolio" className="section-container bg-white">
        <div className="container-responsive">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading portfolio...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !portfolioItems) {
    return (
      <section id="portfolio" className="section-container bg-white">
        <div className="container-responsive">
          <div className="text-center py-16">
            <p className="text-red-600">Error loading portfolio: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  console.log('filteredItems',filteredItems);
  
  return (
    <section id="portfolio" className="section-container bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            A showcase of my work across media hosting, voice-over artistry, event management, 
            and strategic communication campaigns.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-10 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-12 sm:px-14 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'bg-blue-900 text-white shadow-lg border-blue-900'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                {}                
                {item.type === 'video' && item.video_url ? (
                  <iframe
                    src={item.video_url.replace('watch?v=', 'embed/')}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' && (
                    <a
                      href={item.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </a>
                  )}
                  {item.type === 'audio' && (
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  )}                 
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-12 sm:px-14 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg border-2 border-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
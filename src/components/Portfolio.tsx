'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'media', label: 'Media Hosting' },
    { id: 'voiceover', label: 'Voice-Over' },
    { id: 'mc', label: 'MC Events' },
    { id: 'pr', label: 'PR Campaigns' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Prime Time News Hosting",
      category: "media",
      description: "Lead anchor for evening news program, delivering breaking news and conducting high-profile interviews.",
      image: "/api/placeholder/600/400",
      videoUrl: "https://youtube.com/watch?v=example1",
      type: "video"
    },
    {
      id: 2,
      title: "Corporate Brand Campaign",
      category: "voiceover",
      description: "Voice-over work for major telecommunications company's national advertising campaign.",
      image: "/api/placeholder/600/400",
      audioUrl: "/audio/sample1.mp3",
      type: "audio"
    },
    {
      id: 3,
      title: "International Conference MC",
      category: "mc",
      description: "Master of ceremonies for three-day international business summit with 500+ attendees.",
      image: "/api/placeholder/600/400",
      link: "#",
      type: "event"
    },
    {
      id: 4,
      title: "Crisis Communication Strategy",
      category: "pr",
      description: "Developed and executed crisis communication plan for major corporation during challenging period.",
      image: "/api/placeholder/600/400",
      link: "#",
      type: "case-study"
    },
    {
      id: 5,
      title: "Documentary Narration",
      category: "voiceover",
      description: "Narrated award-winning documentary about Ethiopian cultural heritage and traditions.",
      image: "/api/placeholder/600/400",
      videoUrl: "https://youtube.com/watch?v=example2",
      type: "video"
    },
    {
      id: 6,
      title: "Morning Show Host",
      category: "media",
      description: "Daily morning television program focusing on lifestyle, culture, and current events.",
      image: "/api/placeholder/600/400",
      videoUrl: "https://youtube.com/watch?v=example3",
      type: "video"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding-y bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' && (
                    <a
                      href={item.videoUrl}
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
                  {(item.type === 'event' || item.type === 'case-study') && (
                    <a
                      href={item.link}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </a>
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
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
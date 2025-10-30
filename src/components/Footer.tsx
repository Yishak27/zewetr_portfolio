'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Media Hosting',
    'Voice-Over Services',
    'MC & Event Hosting',
    'PR Strategy',
    'Communication Consulting',
    'Brand Storytelling'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">Zewotir Desalegn Alemu</h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                PR Strategist, Media Personality, and Voice-Over Artist dedicated to 
                crafting narratives that connect people, purpose, and possibility.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3" />
                  <a href="mailto:zewotir@example.com" className="hover:text-amber-400 transition-colors duration-300">
                    zewotir@example.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3" />
                  <a href="tel:+251911123456" className="hover:text-amber-400 transition-colors duration-300">
                    +251 911 123 456
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://linkedin.com/in/zewotir-desalegn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/zewotir_desalegn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              <p>
                © {new Date().getFullYear()} Zewotir Desalegn Alemu. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                aria-label="Back to top"
              >
                <ArrowUp size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
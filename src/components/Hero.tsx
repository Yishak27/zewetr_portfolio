'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container-responsive w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Zewotir Desalegn Alemu
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light text-blue-900">
                PR Strategist | Media Personality | Voice-Over Artist
              </p>
              <p className="text-lg sm:text-xl mb-12 leading-relaxed text-gray-700 max-w-xl">
                Crafting narratives that connect people, purpose, and possibility. 
                With years of experience in strategic communication and media excellence, 
                I bring stories to life through authentic and impactful storytelling.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#about"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg text-center"
                >
                  Learn More About Me
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-blue-900 hover:bg-blue-900 hover:text-white text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  View My Work
                </a>
              </motion.div>

              {/* Professional Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">100+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">50+</div>
                  <div className="text-sm text-gray-600">Media Appearances</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl transform rotate-3"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/hero-portrait.jpg"
                    alt="Zewotir Desalegn Alemu - Professional Portrait"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">PR</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎤</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-lg"
              >
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📺</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
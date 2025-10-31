'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen mt-2 md:mt-4 flex items-center overflow-hidden pt-10 pb-12 sm:pb-16">
      <div className="container-responsive w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
                Zewotir Desalegn Alemu

                <span className="text-amber-300 text-5xl"> aka Zik</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-6 font-light text-blue-900">
                PR Strategist | Media Personality | Voice-Over Artist
              </p>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-700 max-w-xl">
                Transforming complex messages into compelling narratives that drive action.
                Specializing in bilingual communication (English & Amharic) for global audiences,
                I deliver strategic storytelling that builds brands and bridges cultures.
              </p>

              <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-9 mt-8'>
                <a
                  href="#about"
                  className='inline-flex h-12 w-1/3 items-center text-sm justify-center bg-blue-900 px-16 sm:px-14 text-white rounded-full font-semibold transition-colors duration-300 shadow-lg text-center border-2 border-blue-900 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap'
                >
                  More About Me
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex h-12 w-1/3 items-center justify-center border-2 border-blue-900 text-blue-900 px-12 sm:px-14 font-semibold transition-all duration-300 text-center rounded-full bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
                >
                  View My Work
                </a>
              </div>

              {/* Professional Highlights */}
              <div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">15+</div>
                  <div className="text-sm text-gray-600 mt-2">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">100+</div>
                  <div className="text-sm text-gray-600 mt-2">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">50+</div>
                  <div className="text-sm text-gray-600 mt-2">Media Appearances</div>
                </div>
              </div>
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
                    src="/logos/leag.png"
                    alt="Zewotir Desalegn Alemu - Professional Portrait"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
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
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTestimonials, useClients } from '../hooks/useApi';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { data: testimonials, loading: testimonialsLoading } = useTestimonials();
  const { data: clientLogos, loading: clientsLoading } = useClients();

  if (testimonialsLoading || clientsLoading) {
    return (
      <section className="section-container bg-gray-50">
        <div className="container-responsive">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || !clientLogos) {
    return (
      <section className="section-container bg-gray-50">
        <div className="container-responsive">
          <div className="text-center py-16">
            <p className="text-red-600">Error loading testimonials</p>
          </div>
        </div>
      </section>
    );
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="section-container bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations and brands across industries.
            Here's what clients say about working with me.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-blue-900 mx-auto mb-6" />
              <motion.p
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.p>
              {/*               
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div> */}
            </div>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                ></div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].title}
                </p>
                <p className="text-blue-900 font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex items-center text-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-blue-900' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-col md:flex-row justify-center w-full lg:grid-cols-6 gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-22"
              >
                <div className="bg-gray-200 flex flex-col rounded-lg p-4 w-full h-full flex items-center justify-center">
                   <Image
                    src={client.logo}
                    alt={client.name}
                    className="object-cover"
                    priority
                    width="100"
                    height="100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="text-xs text-gray-500 text-center font-medium">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join these satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300 text-lg"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials
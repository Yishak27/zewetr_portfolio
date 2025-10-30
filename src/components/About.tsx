'use client';

import { motion } from 'framer-motion';
import { Award, Users, Mic, Tv } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Media Hosting",
      description: "Experienced television and radio host with a commanding presence"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-Over Artistry",
      description: "Professional voice-over artist for commercials, documentaries, and more"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "PR Strategy",
      description: "Strategic communication expert helping brands tell their stories"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional MC",
      description: "Engaging master of ceremonies for corporate and cultural events"
    }
  ];

  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="mb-6">
                Welcome to my digital space. I am Zewotir Desalegn Alemu, a passionate communication 
                professional who believes in the transformative power of storytelling and strategic messaging.
              </p>
              <p className="mb-6">
                With years of experience in media, public relations, and voice artistry, I have had the 
                privilege of working across diverse platforms and with remarkable individuals who have 
                shaped my understanding of effective communication.
              </p>
              <p className="mb-6">
                My approach combines the art of communication with the science of strategy, ensuring 
                that every narrative I craft resonates authentically with its intended audience while 
                achieving measurable impact.
              </p>
              <p>
                Whether I'm hosting a television program, developing a PR campaign, or lending my voice 
                to bring a script to life, my mission remains constant: to connect people, purpose, and 
                possibility through the power of compelling communication.
              </p>
            </div>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-900 to-amber-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for professional photo */}
              <div className="w-full h-full bg-[url('/api/placeholder/400/500')] bg-cover bg-center"></div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
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
      <div className="container-responsive w-50">
        <div className="text-center grid w-30 items-center">
          {/* Text Content */}
          <motion.div
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8 }}
            // viewport={{ once: true }}
            
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="text-gray-700 mb-8">
              <p className="mb-4">
                My journey began with a simple belief: every story deserves to be told with authenticity and impact. 
                Growing up in Ethiopia's rich cultural landscape, I discovered early that communication transcends 
                language—it's about connecting hearts and minds across any divide.
              </p>
              <p className="mb-4">
                Over 15 years in media and strategic communication have taught me that the most powerful messages 
                aren't just heard—they're felt. From anchoring prime-time news to developing crisis communication 
                strategies for international brands, I've learned that authenticity is the foundation of all 
                meaningful communication.
              </p>
              <p className="mb-4">
                What sets me apart is my bilingual expertise in English and Amharic, combined with deep cultural 
                intelligence that helps brands navigate global markets while staying true to their core values. 
                I don't just deliver messages—I craft experiences that resonate across cultures.
              </p>
              <p>
                Today, I'm passionate about helping organizations and individuals find their authentic voice in 
                an increasingly connected world. Whether through strategic PR, compelling voice-over work, or 
                dynamic event hosting, my mission is to transform complex ideas into stories that inspire action.
              </p>
            </div>
            
            <a
              href="/logos/resumeUpdated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-12 sm:px-14 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg mt-6 border-2 border-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              // className="inline-flex h-12 w-1/3 items-center justify-center border-2 border-blue-900 text-blue-900 px-12 sm:px-14 font-semibold transition-all duration-300 text-center rounded-full bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </a>
          </motion.div>

          {/* Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-900 to-amber-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-[url('/api/placeholder/400/500')] bg-cover bg-center"></div>
            </div>
          </motion.div> */}
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
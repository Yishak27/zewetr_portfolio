'use client';

import { motion } from 'framer-motion';
import { Tv, Mic, Users, Target, Play, Download, Calendar } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'media-hosting',
      icon: <Tv className="w-12 h-12" />,
      title: 'Media Hosting',
      tagline: 'Commanding presence across all platforms',
      description: 'Professional television and radio hosting with over 15 years of experience. From news programs to talk shows, I bring authenticity and expertise to every broadcast.',
      features: [
        'Live television hosting',
        'Radio program hosting',
        'Podcast hosting and production',
        'Interview conducting',
        'News anchoring',
        'Talk show moderation'
      ],
      deliverables: [
        'Pre-show research and preparation',
        'Professional on-air presentation',
        'Guest interview coordination',
        'Post-show content creation',
        'Social media promotion'
      ],
      demoVideo: '/demos/media-hosting-reel.mp4',
      startingPrice: 'Starting from $500/session'
    },
    {
      id: 'voice-over',
      icon: <Mic className="w-12 h-12" />,
      title: 'Voice-Over Services',
      tagline: 'Your story, perfectly voiced',
      description: 'Professional voice-over services in English and Amharic for commercials, documentaries, e-learning, and corporate communications.',
      features: [
        'Commercial voice-overs',
        'Documentary narration',
        'E-learning modules',
        'Corporate presentations',
        'IVR and phone systems',
        'Audiobook narration'
      ],
      deliverables: [
        'High-quality audio files (WAV/MP3)',
        'Multiple takes and variations',
        'Professional editing and mastering',
        'Quick turnaround (24-48 hours)',
        'Revision rounds included'
      ],
      demoAudio: '/demos/voice-over-reel.mp3',
      startingPrice: 'Starting from $200/project'
    },
    {
      id: 'mc-services',
      icon: <Users className="w-12 h-12" />,
      title: 'Master of Ceremonies',
      tagline: 'Making every event memorable',
      description: 'Professional MC services for corporate events, conferences, weddings, and cultural celebrations. Bilingual capabilities in English and Amharic.',
      features: [
        'Corporate event hosting',
        'Conference moderation',
        'Award ceremony hosting',
        'Wedding ceremonies',
        'Cultural events',
        'Product launches'
      ],
      deliverables: [
        'Event timeline coordination',
        'Script development and review',
        'Professional presentation',
        'Audience engagement activities',
        'Seamless event flow management'
      ],
      demoVideo: '/demos/mc-services-reel.mp4',
      startingPrice: 'Starting from $800/event'
    },
    {
      id: 'pr-strategy',
      icon: <Target className="w-12 h-12" />,
      title: 'PR Strategy & Consultation',
      tagline: 'Strategic communication that drives results',
      description: 'Comprehensive public relations strategy and crisis communication services for brands, organizations, and individuals looking to enhance their public image.',
      features: [
        'PR strategy development',
        'Crisis communication planning',
        'Media relations management',
        'Brand positioning',
        'Content strategy',
        'Reputation management'
      ],
      deliverables: [
        'Comprehensive PR strategy document',
        'Media contact database',
        'Crisis communication playbook',
        'Content calendar and templates',
        'Performance metrics and reporting'
      ],
      caseStudy: '/case-studies/pr-strategy-success.pdf',
      startingPrice: 'Starting from $1,500/month'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-blue-900 to-amber-900 text-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive communication solutions tailored to your needs. 
              From media hosting to strategic PR, I bring expertise and authenticity to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-container bg-white">
        <div className="container-responsive">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 text-blue-900 p-4 rounded-xl mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-lg text-blue-900 font-medium">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What You Get</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Investment</span>
                      <p className="font-semibold text-gray-900">{service.startingPrice}</p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>

                {/* Demo/Media */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-100 rounded-2xl p-8 text-center">
                    {service.demoVideo && (
                      <div className="mb-4">
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                          <Play className="w-16 h-16 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4">Watch demo reel</p>
                        <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700">
                          <Play className="w-5 h-5 mr-2" />
                          Play Video
                        </button>
                      </div>
                    )}
                    {service.demoAudio && (
                      <div className="mb-4">
                        <div className="bg-gray-200 rounded-lg p-8 mb-4">
                          <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Audio Demo Reel</p>
                        </div>
                        <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700">
                          <Play className="w-5 h-5 mr-2" />
                          Listen to Samples
                        </button>
                      </div>
                    )}
                    {service.caseStudy && (
                      <div className="mb-4">
                        <div className="bg-gray-200 rounded-lg p-8 mb-4">
                          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Case Study Available</p>
                        </div>
                        <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700">
                          <Download className="w-5 h-5 mr-2" />
                          Download Case Study
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-gray-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working together and my services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients globally and am available for remote projects. My bilingual capabilities (English & Amharic) and cultural intelligence make me particularly effective for international campaigns."
                },
                {
                  question: "What's your typical turnaround time?",
                  answer: "Voice-over projects: 24-48 hours. PR strategy development: 1-2 weeks. Event hosting and MC services are scheduled based on availability. Rush projects can be accommodated with advance notice."
                },
                {
                  question: "Do you provide revisions?",
                  answer: "Yes! All services include revision rounds. Voice-over projects include up to 2 revisions, PR strategies include collaborative refinement sessions, and event scripts are reviewed until perfect."
                },
                {
                  question: "Can you handle crisis communication situations?",
                  answer: "Yes, I specialize in crisis communication and have helped numerous organizations navigate challenging situations. I'm available for urgent crisis response with 24-hour availability when needed."
                },
                {
                  question: "What languages do you work in?",
                  answer: "I'm fluent in both English and Amharic, making me ideal for projects targeting Ethiopian markets or requiring bilingual communication. I also have cultural expertise for East African markets."
                },
                {
                  question: "How do you price your services?",
                  answer: "Pricing varies by project scope, timeline, and deliverables. I offer transparent pricing with detailed quotes. Download my rate card for starting prices, and contact me for custom project quotes."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and how I can help bring your vision to life. 
              Available for both local and international projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300 text-lg"
              >
                Start Your Project
              </a>
              <a
                href="/rate-card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Rate Card
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
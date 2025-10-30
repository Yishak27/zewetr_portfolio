'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Strategic Communication in Crisis Management",
      excerpt: "In today's fast-paced digital world, how organizations communicate during challenging times can make or break their reputation. Here's what I've learned from years of crisis communication...",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "PR Strategy",
      image: "/api/placeholder/600/400",
      slug: "strategic-communication-crisis-management"
    },
    {
      id: 2,
      title: "Finding Your Voice: A Guide to Authentic Media Presence",
      excerpt: "Authenticity in media isn't just about being yourself—it's about being the best version of yourself while staying true to your core values. Let me share some insights...",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Media",
      image: "/api/placeholder/600/400",
      slug: "finding-your-voice-authentic-media-presence"
    },
    {
      id: 3,
      title: "The Power of Storytelling in Brand Building",
      excerpt: "Every brand has a story, but not every brand knows how to tell it effectively. The difference between good and great communication often lies in the narrative approach...",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Branding",
      image: "/api/placeholder/600/400",
      slug: "power-of-storytelling-brand-building"
    },
    {
      id: 4,
      title: "Voice-Over Artistry: More Than Just Reading Scripts",
      excerpt: "Behind every compelling voice-over is hours of preparation, emotional connection, and technical skill. Here's what goes into creating voices that truly resonate...",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Voice-Over",
      image: "/api/placeholder/600/400",
      slug: "voice-over-artistry-beyond-reading-scripts"
    },
    {
      id: 5,
      title: "Cultural Sensitivity in Global Communication",
      excerpt: "As our world becomes increasingly connected, the ability to communicate across cultures isn't just valuable—it's essential. Here are key principles I've learned...",
      date: "2023-12-10",
      readTime: "8 min read",
      category: "Communication",
      image: "/api/placeholder/600/400",
      slug: "cultural-sensitivity-global-communication"
    },
    {
      id: 6,
      title: "The Evolution of Media Hosting in the Digital Age",
      excerpt: "Traditional media hosting has transformed dramatically with digital platforms. Here's how professionals can adapt and thrive in this new landscape...",
      date: "2023-12-01",
      readTime: "6 min read",
      category: "Media",
      image: "/api/placeholder/600/400",
      slug: "evolution-media-hosting-digital-age"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-container bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Insights & Reflections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Thoughts on communication strategy, media trends, and the evolving landscape
            of public relations and storytelling.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-900 to-amber-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 lg:p-10 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-white/80 mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{formatDate(blogPosts[0].date)}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <a
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-white hover:text-amber-200 font-semibold transition-colors duration-300"
                >
                  Read Full Article
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
              <div className="aspect-video lg:aspect-auto">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-900 hover:text-amber-600 font-semibold transition-colors duration-300"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to receive my latest insights on communication strategy,
              media trends, and professional development directly in your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
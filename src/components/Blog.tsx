'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X, User, Tag } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

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
        {/* <motion.div
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
                <button
                  onClick={() => openModal(blogPosts[0])}
                  className="inline-flex lg:text-xsm h-12 w-1/3 items-center justify-center border-2 border-blue-900 text-blue-900 px-12 sm:px-14 font-semibold transition-all duration-300 text-center rounded-full bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
                >
                  Read more
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
              <div className="aspect-video lg:aspect-auto">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group"
            >
              {/* <div className="aspect-video overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              </div> */}

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

                <button
                  onClick={() => openModal(post)}
                  className="inline-flex h-12 w-1/3 items-center justify-center border-2 border-blue-900 text-blue-900 px-12 sm:px-14 font-semibold transition-all duration-300 text-center rounded-full bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </button>
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
                className="inline-flex h-12 w-1/3 items-center justify-center bg-blue-900 px-12 sm:px-14 text-white rounded-full font-semibold transition-colors duration-300 shadow-lg text-center border-2 border-blue-900 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div
                  className="h-64"
                  style={{ backgroundColor: "GrayText" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute bg-blue top-4 right-4 rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center text-white/90 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{formatDate(selectedPost.date)}</span>
                      <Clock size={16} className="mr-2" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto">
                {/* Author Info */}
                <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url(${selectedPost.author.image})` }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedPost.author.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedPost.author.bio}</p>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Published on {formatDate(selectedPost.date)}
                  </div>
                  <button
                    onClick={closeModal}
                    className="inline-flex h-10 items-center justify-center bg-blue-900 px-6 text-white rounded-full font-semibold transition-colors duration-300 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
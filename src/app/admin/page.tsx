'use client';

import { useState, useEffect } from 'react';
import { useBlogPosts, useGallery, useTestimonials, usePortfolio } from '../../hooks/useApi';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('blog');
  const { data: blogPosts, loading: blogLoading } = useBlogPosts();
  const { data: gallery, loading: galleryLoading } = useGallery();
  const { data: testimonials, loading: testimonialsLoading } = useTestimonials();
  const { data: portfolio, loading: portfolioLoading } = usePortfolio();

  const tabs = [
    { id: 'blog', label: 'Blog Posts', count: blogPosts?.length || 0 },
    { id: 'gallery', label: 'Gallery', count: gallery?.length || 0 },
    { id: 'testimonials', label: 'Testimonials', count: testimonials?.length || 0 },
    { id: 'portfolio', label: 'Portfolio', count: portfolio?.length || 0 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'blog':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Blog Posts</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add New Post
              </button>
            </div>
            {blogLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="grid gap-4">
                {blogPosts?.map((post: any) => (
                  <div key={post.id} className="bg-white p-6 rounded-lg shadow border">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-2">{post.excerpt.substring(0, 150)}...</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>{post.category}</span>
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.map((tag: string, index: number) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Gallery Items</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add New Item
              </button>
            </div>
            {galleryLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery?.map((item: any) => (
                  <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {item.category}
                      </span>
                      <div className="flex justify-end space-x-2 mt-3">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                        <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'testimonials':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Testimonials</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add New Testimonial
              </button>
            </div>
            {testimonialsLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="grid gap-4">
                {testimonials?.map((testimonial: any) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow border">
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 text-sm">{testimonial.title}</p>
                            <p className="text-blue-600 text-sm">{testimonial.company}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                          </div>
                        </div>
                        <p className="text-gray-700 mt-2">{testimonial.text}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'portfolio':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Portfolio Items</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add New Item
              </button>
            </div>
            {portfolioLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {portfolio?.map((item: any) => (
                  <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {item.category}
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                          <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Admin</h1>
            <a 
              href="/"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Site
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}
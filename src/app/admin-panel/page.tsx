'use client';

import { useState } from 'react';
import { Plus, Upload, Database, ArrowLeft } from 'lucide-react';

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  const sections = [
    { id: 'overview', label: 'Overview', icon: Database },
    { id: 'blog', label: 'Blog Posts', icon: Plus },
    { id: 'gallery', label: 'Gallery', icon: Upload },
    { id: 'testimonials', label: 'Testimonials', icon: Plus },
    { id: 'portfolio', label: 'Portfolio', icon: Plus },
  ];

  const handleAddNew = (type: string) => {
    setFormType(type);
    setShowForm(true);
  };

  const handleSubmit = async (formData: any) => {
    try {
      const response = await fetch(`/api/admin/${formType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data added successfully!');
        setShowForm(false);
        setFormType('');
      } else {
        alert('Failed to add data');
      }
    } catch (error) {
      alert('Error occurred while adding data');
    }
  };

  const renderForm = () => {
    if (!showForm) return null;

    switch (formType) {
      case 'blog':
        return <BlogUploadForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />;
      case 'gallery':
        return <GalleryUploadForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />;
      case 'testimonials':
        return <TestimonialUploadForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />;
      case 'portfolio':
        return <PortfolioUploadForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <a 
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Site
              </a>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-gray-900">Content Management</h2>
              </div>
              <nav className="p-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {section.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                {activeSection === 'overview' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Content Overview</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-medium text-blue-900 mb-2">Quick Actions</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => handleAddNew('blog')}
                            className="w-full text-left px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
                          >
                            + Add Blog Post
                          </button>
                          <button
                            onClick={() => handleAddNew('gallery')}
                            className="w-full text-left px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
                          >
                            + Add Gallery Item
                          </button>
                          <button
                            onClick={() => handleAddNew('testimonials')}
                            className="w-full text-left px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
                          >
                            + Add Testimonial
                          </button>
                          <button
                            onClick={() => handleAddNew('portfolio')}
                            className="w-full text-left px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
                          >
                            + Add Portfolio Item
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="font-medium text-green-900 mb-2">Instructions</h3>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Use the sidebar to navigate between sections</li>
                          <li>• Click "Add New" buttons to upload content</li>
                          <li>• All data is stored in SQLite database</li>
                          <li>• Changes appear immediately on your site</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection !== 'overview' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold capitalize">{activeSection}</h2>
                      <button
                        onClick={() => handleAddNew(activeSection)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add New {activeSection.slice(0, -1)}
                      </button>
                    </div>
                    
                    <div className="text-center py-12 text-gray-500">
                      <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Click "Add New" to upload {activeSection} content</p>
                      <p className="text-sm mt-2">Your existing data display remains unchanged</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forms */}
      {renderForm()}
    </div>
  );
}

// Simple Blog Upload Form
function BlogUploadForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    read_time: '',
    category: '',
    image: '',
    slug: '',
    author_name: '',
    author_image: '',
    author_bio: '',
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    onSubmit({ ...formData, tags: tagsArray });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Add New Blog Post</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Slug (URL-friendly)"
              value={formData.slug}
              onChange={(e) => setFormData({...formData, slug: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              required
            />
            <textarea
              placeholder="Content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={6}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="px-3 py-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Read time (e.g., 5 min read)"
                value={formData.read_time}
                onChange={(e) => setFormData({...formData, read_time: e.target.value})}
                className="px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Author Name"
              value={formData.author_name}
              onChange={(e) => setFormData({...formData, author_name: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="url"
              placeholder="Author Image URL"
              value={formData.author_image}
              onChange={(e) => setFormData({...formData, author_image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Author Bio"
              value={formData.author_bio}
              onChange={(e) => setFormData({...formData, author_bio: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={2}
              required
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Simple Gallery Upload Form
function GalleryUploadForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Add Gallery Item</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Simple Testimonial Upload Form
function TestimonialUploadForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    image: '',
    rating: 5,
    text: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Add Testimonial</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Job Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <select
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
            <textarea
              placeholder="Testimonial text"
              value={formData.text}
              onChange={(e) => setFormData({...formData, text: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={4}
              required
            />
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Simple Portfolio Upload Form
function PortfolioUploadForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    video_url: '',
    audio_url: '',
    link: '',
    type: 'image'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Add Portfolio Item</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
              <option value="web">Web Project</option>
            </select>
            <input
              type="url"
              placeholder="Main Image URL"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="url"
              placeholder="Video URL (optional)"
              value={formData.video_url}
              onChange={(e) => setFormData({...formData, video_url: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              type="url"
              placeholder="Audio URL (optional)"
              value={formData.audio_url}
              onChange={(e) => setFormData({...formData, audio_url: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              type="url"
              placeholder="Project Link (optional)"
              value={formData.link}
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
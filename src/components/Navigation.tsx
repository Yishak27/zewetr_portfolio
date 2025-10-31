'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      // scrolled 
        // ? 
        'bg-dark/98 backdrop-blur-md shadow border-b border-gray-200' 
        // :
        //  'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center py-2 lg:py-3">
          {/* Logo/Brand */}
          <div className="shrink-0">
            <h1 className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${
               'text-gray-900'
            }`}>
              <span className="font-serif">Zewotir </span>
              
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative inline-block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 group ${
                    'text-gray-700 hover:text-blue-900 hover:bg-blue-50' 
                      // : 'text-white hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                    scrolled ? 'bg-blue-900' : 'bg-amber-300'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>
{/* 
          <div className="hidden p-10 lg:block">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                scrolled
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              Let`s Connect
            </a>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                // scrolled 
                  // ?
                   'text-gray-700 hover:bg-gray-100' 
                  // :
                  //  'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 py-4 bg-white/98 backdrop-blur-md rounded-2xl mt-2 mx-2 shadow-2xl border border-gray-100">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  className="block w-full text-center px-12 sm:px-14 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300 border-2 border-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  Let`s Connect
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
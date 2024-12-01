import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Shield className={`w-8 h-8 ${scrolled ? 'text-red-700' : 'text-white'}`} />
          <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            NCC BIT
          </span>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['about', 'gallery', 'vision', 'mission', 'objectives'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item}`}
                  className={`${
                    scrolled ? 'text-gray-700 hover:text-red-700' : 'text-white hover:text-red-200'
                  } transition capitalize`}
                >
                  {item.replace('-', ' ')}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
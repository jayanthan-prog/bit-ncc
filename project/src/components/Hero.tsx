import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img 
          src="https://www.bitsathy.ac.in/wp-content/uploads/BIT01055-min-scaled.jpg"
          alt="NCC Cadets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white space-y-6 max-w-4xl px-4">
          <AnimatedText
            text="National Cadet Corps"
            className="text-6xl font-bold mb-4"
          />
          <AnimatedText
            text="Bannari Amman Institute of Technology"
            className="text-2xl font-light"
            delay={0.5}
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="#about"
              className="inline-block mt-8 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
}
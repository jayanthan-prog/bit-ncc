import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg1agUHkuq6xSkb7SJu08LJ6cVLSBMbu51w&s",
    alt: "NCC Activity 1"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59THi-Te8-4_p8laJqe7rjdtBZpaty4JlZA&s",
    alt: "NCC Activity 2"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0ZO_Sv7ZG9ebI_jq0fQAOdJF80gE6PrKwy11csvhrPb-4ZcQNGO-zNc8G_OYjF3cIfE&usqp=CAU",
    alt: "NCC Activity 3"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTha4VrC6CcBuOOjzQ6pgcyZgoA_Rb_3aLEg0I6h5oDbJyRFGXwZHfg_PQmSjWxBQCnU&usqp=CAU",
    alt: "NCC Activity 4"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIghDu3gvWPHqyHKAQtgdUTmkYpNzEpcSoQ&s",
    alt: "NCC Activity 5"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Gallery() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-lg font-semibold">
                {image.alt}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
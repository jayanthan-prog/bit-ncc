import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const objectives = [
  "Reach out to the maximum youths through various institutions.",
  "Make NCC as an important part of the society.",
  "Teach positive thinking and attitude to the youths.",
  "Become a main source of National Integration by making NCC as one of the greatest cohesive force of our nation irrespective of any caste, creed, religion or region.",
  "Mould the youth of the entire country into a united, secular and disciplined citizens of the nation.",
  "Provide an ideal platform for the youth to showcase their potential in nation building.",
  "Instill spirit of secularism and united India by organizing National Integration Camps all over the country.",
  "Reach out to the youths of friendly foreign countries through Youth Exchange Programmes (YEP)."
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 }
};

export function ObjectivesList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6"
    >
      {objectives.map((objective, index) => (
        <motion.div
          key={index}
          variants={item}
          className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">{objective}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
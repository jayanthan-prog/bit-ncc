import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ title, children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-gray-900 border-l-4 border-red-600 pl-4"
        >
          {title}
        </motion.h2>
        {children}
      </motion.div>
    </section>
  );
}
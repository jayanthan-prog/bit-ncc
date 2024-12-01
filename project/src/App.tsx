import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ObjectivesList } from './components/ObjectivesList';
import { Gallery } from './components/Gallery';
import { ScrollProgress } from './components/ScrollProgress';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <Header />
      <Hero />
      
      <Section id="about" title="About Us">
        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-700 leading-relaxed">
              National Cadet Corps in Bannari Amman Institute of Technology commenced in the year 1999. 
              BIT has the prestigious Army wing of Senior Division NCC. Young soldiers will be seen trained 
              extensively in parade ground of the college campus. Cadets show their excellent display of 
              skill of marching at the Independence, Republic days and sports days. They attend various 
              camps being held in both inter and intra states.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              2 (TN) CTC NCC is an Army Wing which is dedicated to both school and college students. 
              The unit is led by OFFICER COMMANDING COL EMMANUEL TAMANG. The unit conducts various camps 
              around the year among which RDC, TSC, EBSB, and AAC (ARMY ATTACHMENT CAMP) are of great 
              importance and recognition. The unit successfully celebrates it's 25th year in 2024 which 
              marks the beginning of greater production of successful cadets.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="gallery" title="Gallery" className="bg-gradient-to-br from-red-50 to-white">
        <Gallery />
      </Section>

      <Section id="vision" title="Vision" className="bg-gradient-to-br from-red-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-600"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            To foster a culture of service, leadership, and social responsibility among the youth, 
            empowering them to contribute meaningfully to the development of society and the nation. 
            The Motto of NSS "NOT ME BUT YOU", reflects the essence of democratic living and upholds 
            the need for self-less service.
          </p>
        </motion.div>
      </Section>

      <Section id="mission" title="Mission">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-600"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            To develop leadership and character qualities, mould discipline and nurture social 
            integration and cohesion through multi-faceted programs conducted in a military environment.
          </p>
        </motion.div>
      </Section>

      <Section id="objectives" title="Objectives" className="bg-gradient-to-br from-red-50 to-white">
        <ObjectivesList />
      </Section>
    </div>
  );
}

export default App;
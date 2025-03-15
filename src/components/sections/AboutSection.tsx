'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiGlobe, FiServer } from 'react-icons/fi';

const AboutSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <FiShield className="w-6 h-6 text-accent" />,
      title: 'Strategic Security',
      description: 'Advanced protection systems designed for critical operations and complex environments.'
    },
    {
      icon: <FiLock className="w-6 h-6 text-accent" />,
      title: 'Secure Communications',
      description: 'Robust platforms for confidential and secure information transmission.'
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-accent" />,
      title: 'Global Intelligence',
      description: 'Comprehensive analysis capabilities for strategic decision-making worldwide.'
    },
    {
      icon: <FiServer className="w-6 h-6 text-accent" />,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions that integrate AI and predictive analytics for superior performance.'
    }
  ];

  return (
    <section className="relative py-20 bg-dark-100">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-200 to-dark-100 opacity-70" />
      
      <div className="relative container mx-auto px-4 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            SentraIntel is an American technology company specializing in providing innovative solutions that integrate advanced operational intelligence, secure communications, and comprehensive technology risk management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="relative rounded-xl overflow-hidden bg-dark-200 border border-gray-800 shadow-xl h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <blockquote className="text-xl text-gray-300 italic">
                  "We aim to be global leaders in technology, driven by constant innovation, operational excellence, and absolute integrity. Our goal is to provide our clients with advanced capabilities that allow them to anticipate tomorrow's threats."
                  <div className="mt-4 text-right text-sm text-gray-400">
                    — SentraIntel Vision
                  </div>
                </blockquote>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Multidisciplinary Team</h3>
            <p className="text-gray-300">
              Our multidisciplinary team brings together experts in telecommunications, strategic analysis, cybersecurity, and data science, committed to developing adaptable solutions that address the most complex challenges in today's world.
            </p>
            <p className="text-gray-300">
              We provide unique technological tools for security agencies, defense forces, government agencies, and multinational corporations, maximizing operational efficiency and strategic security.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3">Excellence in telecommunications security</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3">Advanced strategic analysis capabilities</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="ml-3">Innovative solutions for complex challenges</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
              className="bg-dark-200 p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-dark-300 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-dark group-hover:to-primary transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiGlobe, FiServer, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

// Constants for customization
const ABOUT = {
  ANIMATION_DURATION: 0.6,
  SECTION_PADDING: "py-24",
  ACCENT_COLOR: "from-accent to-secondary",
  FEATURE_HOVER_SCALE: 1.02,
  QUOTE_BG_IMAGE: "/images/abstract-tech-pattern.jpg",
};

const AboutSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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
    <section className={`relative ${ABOUT.SECTION_PADDING} bg-dark-100 overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-200 to-dark-100 opacity-70" />
      <div className="absolute -right-40 top-20 w-80 h-80 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      
      <div className="relative container mx-auto px-4 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: ABOUT.ANIMATION_DURATION }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">About SentraIntel</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${ABOUT.ACCENT_COLOR} bg-clip-text text-transparent`}>
              Who We Are
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            SentraIntel is an American technology company specializing in providing innovative solutions that integrate advanced operational intelligence, secure communications, and comprehensive technology risk management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: ABOUT.ANIMATION_DURATION, delay: 0.2 }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden bg-dark-200 border border-gray-800/50 shadow-xl h-[400px] group">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-dark-300/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 shadow-lg max-w-lg">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-4"></div>
                    <blockquote className="text-xl text-gray-200 font-light leading-relaxed">
                      "We aim to be global leaders in technology, driven by constant innovation, operational excellence, and absolute integrity. Our goal is to provide our clients with advanced capabilities that allow them to anticipate tomorrow's threats."
                      <div className="mt-6 pt-4 border-t border-gray-700/30 text-right">
                        <p className="text-sm text-gray-400">— SentraIntel Vision</p>
                      </div>
                    </blockquote>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative elements with pulse animation */}
              <motion.div
                className="absolute top-6 left-6 w-16 h-16 border border-accent/20 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-6 right-6 w-24 h-24 border border-primary/20 rounded-full"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: ABOUT.ANIMATION_DURATION, delay: 0.4 }}
            variants={fadeInUp}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Multidisciplinary Team
            </h3>
            
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded mb-6"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Our multidisciplinary team brings together experts in telecommunications, strategic analysis, cybersecurity, and data science, committed to developing adaptable solutions that address the most complex challenges in today's world.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              We provide unique technological tools for security agencies, defense forces, government agencies, and multinational corporations, maximizing operational efficiency and strategic security.
            </p>
            
            <div className="bg-dark-200/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Core Competencies</h4>
              
              <ul className="space-y-4 text-gray-300">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <FiCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="ml-3">Excellence in telecommunications security and monitoring</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <FiCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="ml-3">Advanced strategic analysis capabilities with AI integration</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <FiCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="ml-3">Innovative solutions for complex security challenges</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Capabilities</h3>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            SentraIntel delivers cutting-edge solutions across multiple domains to ensure comprehensive security and intelligence capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
              variants={fadeInUp}
              whileHover={{ scale: ABOUT.FEATURE_HOVER_SCALE, y: -5 }}
              className="bg-dark-200/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800/80 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-dark-300 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-primary-dark group-hover:to-primary transition-all duration-300">
                {React.cloneElement(feature.icon, {
                  className: "w-6 h-6 text-accent group-hover:text-white transition-colors duration-300"
                })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-accent to-transparent mb-4 transition-all duration-300 group-hover:w-16"></div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
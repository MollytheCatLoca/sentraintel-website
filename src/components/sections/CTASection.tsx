'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiShield, FiZap, FiLock } from 'react-icons/fi';

// Constants for easy customization
const CTA = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "py-28",
  ACCENT_COLORS: "from-accent via-primary to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.05,
  BUTTON_SHADOW: "0 0 25px rgba(0, 174, 239, 0.4)",
  CARD_BG: "bg-dark-200/50",
  SECTION_BG: "from-primary/5 via-dark to-secondary/5"
};

const CTASection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Trusted Security",
      description: "By government agencies worldwide",
      color: "text-accent"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Quick integration with existing systems",
      color: "text-primary"
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Confidential Support",
      description: "Secure consultation process",
      color: "text-secondary"
    }
  ];

  return (
    <section className={`${CTA.SECTION_PADDING} bg-dark relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${CTA.SECTION_BG}`} />
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-100 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-100 to-transparent" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-dark-200/30 backdrop-blur-md rounded-3xl p-10 border border-gray-800/30 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: CTA.ANIMATION_DURATION }}
              variants={fadeInUp}
            >
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-dark-300/80 backdrop-blur-sm border border-gray-700/30">
                <span className="text-sm font-medium text-gray-300">Secure Your Operations</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className={`bg-gradient-to-r ${CTA.ACCENT_COLORS} bg-clip-text text-transparent leading-tight`}>
                  Discover How Our Advanced Solutions
                </span>
                <br />
                <span className="text-white mt-2 inline-block">
                  Can Strengthen Your Operations
                </span>
              </h2>
              
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
                <div className="w-20 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/40"></div>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Partner with SentraIntel to transform your strategic security approach and stay ahead of emerging threats with our comprehensive intelligence solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: CTA.ANIMATION_DURATION, delay: 0.2 }}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div
                whileHover={{ scale: CTA.HOVER_SCALE }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-light to-secondary-light blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  href="/contact"
                  className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(0,174,239,0.4)] transition-all duration-300"
                >
                  <span className="mr-2">Schedule a Consultation</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: CTA.HOVER_SCALE }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/solutions"
                  className="px-8 py-4 rounded-lg bg-dark-300/90 backdrop-blur-sm border border-gray-700 text-white font-medium hover:bg-dark-200 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore Solutions</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-10 border-t border-gray-800/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                  className={`${CTA.CARD_BG} backdrop-blur-sm rounded-xl p-6 border border-gray-800/40 hover:border-gray-700/60 transition-all duration-300`}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-dark-300/80 flex items-center justify-center mr-4">
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-center text-gray-500 text-sm"
          >
            <p>Trusted by security agencies and enterprises across 40+ countries</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
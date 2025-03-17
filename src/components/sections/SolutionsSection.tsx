"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDatabase, FiRadio, FiShield, FiChevronRight, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

// Constants for easy customization
const SOLUTIONS = {
  ANIMATION_DURATION: 0.6,
  TRANSITION_EASE: [0.04, 0.62, 0.23, 0.98],
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.03,
  TAB_ACTIVE_BG: "from-primary/20 to-secondary/20",
  SECTION_PADDING: "py-24",
};

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const solutions = [
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Advanced Operational Intelligence",
      description: "Convert complex data into actionable strategic information. Predictive and analytical tools for threat prevention and rapid response.",
      image: "/images/intelligence-solution.jpg",
      benefits: [
        "Real-time threat detection and analysis",
        "Predictive intelligence capabilities",
        "Automated data processing and interpretation",
        "Strategic insight generation"
      ]
    },
    {
      icon: <FiRadio className="w-6 h-6" />,
      title: "Secure Communications",
      description: "Robust platforms for secure and confidential information transmission. Reliable solutions in critical operational environments.",
      image: "/images/communications-solution.jpg",
      benefits: [
        "End-to-end encryption protocols",
        "Tamper-proof transmission systems",
        "Multi-channel secure communications",
        "Zero-trust architecture"
      ]
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Comprehensive Risk Management",
      description: "Integration of technologies for physical and digital protection. Proactive systems for monitoring, prevention, and risk mitigation in critical infrastructures.",
      image: "/images/risk-solution.jpg",
      benefits: [
        "Holistic security assessment",
        "Proactive threat prevention",
        "Rapid incident response protocols",
        "Continuous security monitoring"
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className={`${SOLUTIONS.SECTION_PADDING} bg-dark relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute left-1/3 top-1/4 w-1/4 h-1/4 bg-gradient-radial from-accent/5 to-transparent rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: SOLUTIONS.ANIMATION_DURATION }}
          variants={slideUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${SOLUTIONS.ACCENT_COLORS} bg-clip-text text-transparent`}>
              What We Do
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            SentraIntel provides cutting-edge solutions designed to enhance operational security, streamline communications, and mitigate complex technological risks.
          </p>
        </motion.div>

        {/* Solutions Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {solutions.map((solution, index) => (
            <motion.button
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={slideUp}
              whileHover={{ scale: SOLUTIONS.HOVER_SCALE, y: -5 }}
              onHoverStart={() => setHoveredTab(index)}
              onHoverEnd={() => setHoveredTab(null)}
              className={`flex items-center p-5 rounded-xl ${
                activeTab === index 
                  ? `bg-gradient-to-r ${SOLUTIONS.TAB_ACTIVE_BG} border border-gray-700/70 shadow-lg` 
                  : 'bg-dark-200/90 hover:bg-dark-300/90 border border-gray-800/70'
              } transition-all duration-300 backdrop-blur-sm`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-5 transition-all duration-300 ${
                activeTab === index || hoveredTab === index
                  ? `bg-gradient-to-r ${SOLUTIONS.PRIMARY_COLORS} text-white shadow-md` 
                  : 'bg-dark-300 text-gray-400'
              }`}>
                {solution.icon}
              </div>
              <div className="text-left">
                <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                  activeTab === index || hoveredTab === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {solution.title}
                </h3>
                <div className={`h-0.5 w-0 bg-gradient-to-r ${SOLUTIONS.PRIMARY_COLORS} rounded transition-all duration-500 ${
                  activeTab === index ? 'w-12' : hoveredTab === index ? 'w-8' : 'w-0'
                }`}></div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Solution Details */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
            transition={{ duration: 0.5, ease: SOLUTIONS.TRANSITION_EASE }}
            className="bg-dark-200/90 backdrop-blur-md rounded-2xl p-8 border border-gray-800/70 overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${SOLUTIONS.PRIMARY_COLORS} flex items-center justify-center mb-4`}>
                    {solutions[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{solutions[activeTab].title}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded mb-6"></div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">{solutions[activeTab].description}</p>
                
                <div className="bg-dark-300/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">Key Benefits</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-accent/30 to-transparent"></div>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solutions[activeTab].benefits.map((benefit, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                        className="flex items-center"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-3">
                          <FiCheck className="text-accent text-sm" />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-lg text-white font-medium inline-flex items-center shadow-md transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <FiChevronRight className="ml-2" />
                </motion.button>
              </motion.div>
              
              <motion.div
                variants={slideIn}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden h-[350px] lg:h-[450px] border border-gray-700/50 shadow-lg group"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
                
                {/* Solution image will go here */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark z-0">
                  {/* When you have actual images, use Image component here */}
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20">
                  <div className="w-24 h-24 rounded-full bg-dark-300/80 backdrop-blur-sm flex items-center justify-center mb-6 border border-gray-700/50 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-3xl">
                      {solutions[activeTab].icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 text-center">
                    {solutions[activeTab].title}
                  </h4>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-accent to-secondary rounded mb-6"></div>
                  
                  <div className="bg-dark-300/60 backdrop-blur-sm px-6 py-4 rounded-lg border border-gray-700/30">
                    <span className="text-gray-300">Advanced security solutions</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-16 h-16 border border-accent/20 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-24 h-24 border border-primary/20 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionsSection;
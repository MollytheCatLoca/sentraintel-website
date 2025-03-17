'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiCpu, FiCloud, FiLock, FiServer, FiMonitor, FiArrowRight } from 'react-icons/fi';

// Constants for easy customization
const TECH = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "py-24",
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.03,
  CARD_BG: "bg-dark-200/90",
  CARD_BORDER: "border-gray-800/70",
  CARD_HOVER_BORDER: "border-accent/40",
  ICON_SIZE: "w-10 h-10"
};

const TechnologySection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      icon: <FiWifi className={TECH.ICON_SIZE} />,
      title: "Multi-band Solutions",
      description: "Adaptable systems compatible with multiple mobile technologies (2G, 3G, 4G, 5G NSA).",
      detailText: "Our technology operates across frequency bands to ensure comprehensive coverage and compatibility in any environment."
    },
    {
      icon: <FiCpu className={TECH.ICON_SIZE} />,
      title: "Advanced Algorithms",
      description: "Artificial intelligence for identification and predictive analysis of operational data.",
      detailText: "Proprietary AI models trained specifically for security applications with high-precision pattern recognition."
    },
    {
      icon: <FiServer className={TECH.ICON_SIZE} />,
      title: "Modular Software",
      description: "Intuitive and secure software that adapts to your specific operational needs.",
      detailText: "Component-based architecture allows for rapid customization and deployment to meet unique security requirements."
    },
    {
      icon: <FiMonitor className={TECH.ICON_SIZE} />,
      title: "Real-time Monitoring",
      description: "Remote and predictive monitoring capabilities for immediate operational response.",
      detailText: "24/7 monitoring systems with alert protocols and automated response mechanisms for critical situations."
    },
    {
      icon: <FiCloud className={TECH.ICON_SIZE} />,
      title: "Scalable Infrastructure",
      description: "Adaptable and expandable technological infrastructure to grow with your requirements.",
      detailText: "Cloud-hybrid architecture that scales on demand while maintaining the highest security standards."
    },
    {
      icon: <FiLock className={TECH.ICON_SIZE} />,
      title: "Secure Architecture",
      description: "End-to-end encryption and advanced security protocols to protect critical data.",
      detailText: "Military-grade encryption combined with zero-trust principles ensures data integrity at all times."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={`${TECH.SECTION_PADDING} bg-dark relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-gradient-radial from-accent/5 to-transparent rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: TECH.ANIMATION_DURATION }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">Advanced Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${TECH.ACCENT_COLORS} bg-clip-text text-transparent`}>
              Our Technology
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            At the core of SentraIntel's solutions is a suite of cutting-edge technologies designed to provide unparalleled security, intelligence, and operational capabilities.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: TECH.HOVER_SCALE, y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`${TECH.CARD_BG} backdrop-blur-sm rounded-xl p-7 border ${TECH.CARD_BORDER} hover:${TECH.CARD_HOVER_BORDER} transition-all duration-300 group hover:shadow-lg relative overflow-hidden`}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
              
              {/* Gradient corner effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-18 h-18 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center p-3 mb-5 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <div className="text-accent group-hover:text-white transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                <div className={`h-0.5 w-12 bg-gradient-to-r ${TECH.PRIMARY_COLORS} rounded mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                
                <p className="text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
                
                <div className="mt-5 pt-4 border-t border-gray-800/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500">SentraIntel Technology</span>
                  <span className="text-accent flex items-center text-sm">
                    <span className="mr-1">Details</span>
                    <FiArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-20 bg-dark-300/90 backdrop-blur-lg rounded-2xl p-10 border border-gray-700/50 relative overflow-hidden shadow-xl"
        >
          <div className="absolute -top-20 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 left-0 w-96 h-96 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                <FiCpu className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Technology Innovation at Our Core</h3>
                <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-transparent rounded mt-1"></div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-4xl">
              Our commitment to technological excellence drives us to continuously innovate and evolve our solutions to meet the ever-changing security landscape. We invest heavily in research and development to ensure our clients always have access to the most advanced capabilities available.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Advanced Signal Processing",
                  description: "Our proprietary signal processing algorithms enable unprecedented accuracy in communications analysis and geolocation services.",
                  icon: <FiWifi className="w-5 h-5" />
                },
                {
                  title: "Predictive AI Systems",
                  description: "Machine learning models that anticipate potential security threats before they materialize, enabling proactive response.",
                  icon: <FiCpu className="w-5 h-5" />
                },
                {
                  title: "Quantum-Resistant Encryption",
                  description: "Forward-looking security implementations designed to withstand future computational advancement threats.",
                  icon: <FiLock className="w-5 h-5" />
                },
                {
                  title: "Adaptive Security Architecture",
                  description: "Self-adjusting security systems that evolve in response to detected threats and operational patterns.",
                  icon: <FiServer className="w-5 h-5" />
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-200/70 p-5 rounded-xl border border-gray-800/60 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mt-1 mr-4">
                      <div className="text-accent">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-700/30 flex flex-col md:flex-row items-center justify-between">
              <span className="text-gray-400 mb-4 md:mb-0">Leveraging cutting-edge research to solve tomorrow's security challenges</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-lg text-white font-medium inline-flex items-center shadow-md"
              >
                <span>Explore Our Technology</span>
                <FiArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
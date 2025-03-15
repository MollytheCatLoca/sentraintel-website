'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiCpu, FiCloud, FiLock, FiServer, FiMonitor } from 'react-icons/fi';

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Multi-band Solutions",
      description: "Adaptable systems compatible with multiple mobile technologies (2G, 3G, 4G, 5G NSA)."
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "Advanced Algorithms",
      description: "Artificial intelligence for identification and predictive analysis of operational data."
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Modular Software",
      description: "Intuitive and secure software that adapts to your specific operational needs."
    },
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Remote and predictive monitoring capabilities for immediate operational response."
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Adaptable and expandable technological infrastructure to grow with your requirements."
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Secure Architecture",
      description: "End-to-end encryption and advanced security protocols to protect critical data."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-grid.svg')] opacity-5" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              Our Technology
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            At the core of SentraIntel's solutions is a suite of cutting-edge technologies designed to provide unparalleled security, intelligence, and operational capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="bg-dark-200 rounded-xl p-6 border border-gray-800 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                <div className="text-accent group-hover:text-white transition-colors duration-300">
                  {tech.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-16 bg-dark-300 rounded-2xl p-8 border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Technology Innovation at Our Core</h3>
            <p className="text-gray-300 mb-6">
              Our commitment to technological excellence drives us to continuously innovate and evolve our solutions to meet the ever-changing security landscape. We invest heavily in research and development to ensure our clients always have access to the most advanced capabilities available.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-200 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">Advanced Signal Processing</h4>
                <p className="text-gray-400 text-sm">
                  Our proprietary signal processing algorithms enable unprecedented accuracy in communications analysis and geolocation services.
                </p>
              </div>
              <div className="bg-dark-200 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">Predictive AI Systems</h4>
                <p className="text-gray-400 text-sm">
                  Machine learning models that anticipate potential security threats before they materialize, enabling proactive response.
                </p>
              </div>
              <div className="bg-dark-200 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">Quantum-Resistant Encryption</h4>
                <p className="text-gray-400 text-sm">
                  Forward-looking security implementations designed to withstand future computational advancement threats.
                </p>
              </div>
              <div className="bg-dark-200 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">Adaptive Security Architecture</h4>
                <p className="text-gray-400 text-sm">
                  Self-adjusting security systems that evolve in response to detected threats and operational patterns.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiRadio, FiShield } from 'react-icons/fi';
import Image from 'next/image';

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Advanced Operational Intelligence",
      description: "Convert complex data into actionable strategic information. Predictive and analytical tools for threat prevention and rapid response.",
      image: "/images/intelligence-solution.jpg"
    },
    {
      icon: <FiRadio className="w-6 h-6" />,
      title: "Secure Communications",
      description: "Robust platforms for secure and confidential information transmission. Reliable solutions in critical operational environments.",
      image: "/images/communications-solution.jpg"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Comprehensive Risk Management",
      description: "Integration of technologies for physical and digital protection. Proactive systems for monitoring, prevention, and risk mitigation in critical infrastructures.",
      image: "/images/risk-solution.jpg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            SentraIntel provides cutting-edge solutions designed to enhance operational security, streamline communications, and mitigate complex technological risks.
          </p>
        </motion.div>

        {/* Solutions Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {solutions.map((solution, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center p-4 rounded-lg ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-gray-700' 
                  : 'bg-dark-200 hover:bg-dark-300 border border-gray-800'
              } transition-all duration-300`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                  : 'bg-dark-300 text-gray-400'
              }`}>
                {solution.icon}
              </div>
              <div className="text-left">
                <h3 className={`font-semibold ${
                  activeTab === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {solution.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Solution Details */}
        <motion.div 
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="bg-dark-200 rounded-2xl p-8 border border-gray-800 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{solutions[activeTab].title}</h3>
              <p className="text-gray-300 mb-6">{solutions[activeTab].description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Strategic Implementation</h4>
                    <p className="text-gray-400 text-sm">Tailored to your organization's specific needs and challenges</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Seamless Integration</h4>
                    <p className="text-gray-400 text-sm">Works with your existing systems and infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Ongoing Support</h4>
                    <p className="text-gray-400 text-sm">Continuous updates and technical assistance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-[300px] lg:h-[400px] border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  {solutions[activeTab].title} Solutions
                </span>
              </div>
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-dark-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  {solutions[activeTab].icon}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
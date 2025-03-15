'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-dark to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-100 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-100 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Discover How Our Advanced Solutions
              </span>
              <br />
              <span className="text-white">
                Can Strengthen Your Operations
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Partner with SentraIntel to transform your strategic security approach and stay ahead of emerging threats.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all duration-300 flex items-center"
            >
              Schedule a Consultation <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 rounded-lg bg-dark-200 border border-gray-700 text-white font-medium hover:bg-dark-300 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Trusted Security</h4>
                <p className="text-gray-400 text-sm">By government agencies worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Rapid Deployment</h4>
                <p className="text-gray-400 text-sm">Quick integration with existing systems</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Confidential Support</h4>
                <p className="text-gray-400 text-sm">Secure consultation process</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
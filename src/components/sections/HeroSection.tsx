'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient and spotlight effect */}
      <div className="absolute inset-0 bg-dark z-0">
        <div className="absolute inset-0 bg-spotlight from-primary-dark/20 via-dark to-dark z-0" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-30 z-10" />
      </div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent/20 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse-slow z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-secondary/20 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse-slow z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Advanced Intelligence
              </span>
              <br />
              <span className="text-white">
                for Tomorrow's Security
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              In a world where information defines power, SentraIntel leads the development of comprehensive technological solutions that transform strategic communications management, enhance operational intelligence, and provide effective protection against complex threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/solutions"
                className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-md text-white font-medium hover:shadow-glow transition-all duration-300 w-full sm:w-auto text-center"
              >
                Discover Our Solutions
              </Link>
              <Link
                href="/contact"
                className="bg-dark-200 border border-gray-700 px-8 py-3 rounded-md text-white font-medium hover:bg-dark-300 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Here we'll use a stylized tech illustration */}
              <div className="absolute inset-0 rounded-xl border border-gray-700 bg-dark-200 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for a 3D or SVG illustration */}
                  <div className="w-3/4 h-3/4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      SentraIntel Technology
                    </span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-accent/30 rounded-full" />
                <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-secondary/30 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5 
            }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
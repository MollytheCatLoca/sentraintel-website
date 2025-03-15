'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SecurityOrbital from '@/components/ui/SecurityOrbital';

// Hero section constants for easy customization
const HERO = {
  // Background settings
  BG_IMAGE: "/images/HeroEye.jpg",
  BG_OVERLAY_OPACITY: 0.7,
  BG_BLUR: "8px",
  
  // Animation timings
  TITLE_ANIMATION_DURATION: 0.8,
  CONTENT_ANIMATION_DELAY: 0.2,
  IMAGE_ANIMATION_DELAY: 0.4,
  
  // Element styling
  BORDER_RADIUS: "16px",
  GLOW_INTENSITY: "0 0 40px rgba(0, 174, 239, 0.3)",
  ACCENT_BORDER: "1px solid rgba(0, 174, 239, 0.3)",
  
  // Content settings
  MAX_CONTENT_WIDTH: "600px",
  BUTTON_HOVER_SCALE: 1.03
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO.BG_IMAGE}
          alt="Digital security visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm z-10" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20 z-20" />
      
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-radial from-accent/20 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse-slow z-10" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-secondary/15 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse-slow z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-30 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: HERO.TITLE_ANIMATION_DURATION }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
              <span className="text-sm font-medium text-gray-300">Next-Generation Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Advanced Intelligence
              </span>
              <br />
              <span className="text-white">
                for Tomorrow's Security
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: HERO.CONTENT_ANIMATION_DELAY }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              In a world where information defines power, SentraIntel leads the development of comprehensive technological solutions that transform strategic communications management, enhance operational intelligence, and provide effective protection against complex threats.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: HERO.CONTENT_ANIMATION_DELAY + 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <motion.div
                whileHover={{ scale: HERO.BUTTON_HOVER_SCALE }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-light to-secondary-light blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <Link
                  href="/solutions"
                  className="relative bg-gradient-to-r from-primary to-secondary px-8 py-3.5 rounded-md text-white font-medium shadow-lg flex items-center justify-center w-full sm:w-auto"
                >
                  <span>Discover Our Solutions</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: HERO.BUTTON_HOVER_SCALE }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="bg-dark-300/90 backdrop-blur-sm border border-gray-700 px-8 py-3.5 rounded-md text-white font-medium hover:bg-dark-200 transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
                >
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: HERO.CONTENT_ANIMATION_DELAY + 0.4 }}
              className="mt-12 pt-8 border-t border-gray-800/40 hidden lg:block"
            >
              <div className="flex items-center space-x-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dark-300 border border-gray-700 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-400 text-sm">Trusted by Government Agencies</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dark-300 border border-gray-700 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-400 text-sm">Advanced Encryption</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: HERO.IMAGE_ANIMATION_DELAY }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[550px]">
              <div 
                className="absolute inset-0 rounded-xl border border-gray-700/50 overflow-hidden"
                style={{ boxShadow: HERO.GLOW_INTENSITY }}
              >
                {/* Stylized overlay matching the hero image theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-200/90 to-dark/95" />
                
                {/* Central visualization - Using the imported component */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <SecurityOrbital />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rounded-full" />
                <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-secondary/20 rounded-full" />
                
                {/* Data visualization elements */}
                <div className="absolute bottom-8 left-8 right-8 h-20 bg-dark-300/70 backdrop-blur-sm rounded-lg border border-gray-800/50 flex items-center px-4">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div>
                      <div className="h-2 w-16 bg-accent/30 rounded-full mb-2"></div>
                      <div className="h-2 w-24 bg-accent/20 rounded-full"></div>
                    </div>
                    <div>
                      <div className="h-2 w-20 bg-primary/30 rounded-full mb-2"></div>
                      <div className="h-2 w-12 bg-primary/20 rounded-full"></div>
                    </div>
                    <div>
                      <div className="h-2 w-14 bg-secondary/30 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-secondary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
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
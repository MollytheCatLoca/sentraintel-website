'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLock, FiShield } from 'react-icons/fi';

// Logo constants for easy customization
const LOGO = {
  PATH: "/images/SentraLogo.png",
  ALT: "SentraIntel Logo",
  WIDTH: 40,
  HEIGHT: 40,
  BORDER_RADIUS: "50%",
  OPACITY: 0.95,
  FILTER: "drop-shadow(0 0 6px rgba(0, 174, 239, 0.4))",
  MARGIN_RIGHT: "12px",
  BACKGROUND: "rgba(10,10,14,0.5)",
  PADDING: "3px",
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    setActiveSection(window.location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-200/80 backdrop-blur-xl shadow-lg border-b border-gray-800/30'
          : 'bg-gradient-to-b from-dark/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center group">
              <div 
                className="transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow relative overflow-hidden"
                style={{
                  borderRadius: LOGO.BORDER_RADIUS,
                  marginRight: LOGO.MARGIN_RIGHT,
                  background: LOGO.BACKGROUND,
                  padding: LOGO.PADDING,
                  filter: LOGO.FILTER,
                  opacity: LOGO.OPACITY,
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary-dark/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <Image 
                  src={LOGO.PATH}
                  alt={LOGO.ALT}
                  width={LOGO.WIDTH}
                  height={LOGO.HEIGHT}
                  className="object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent transition-all duration-300 group-hover:from-accent group-hover:to-primary-light">
                  SentraIntel
                </span>
                <div className="flex items-center space-x-2">
                  
                  <span className="text-xs text-gray-400 font-light tracking-widest">ADVANCED SECURITY</span>
             
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-1"
                  onMouseEnter={() => setHoverItem(item.href)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative z-10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 inline-block
                    ${activeSection === item.href 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href && (
                      <motion.div 
                        className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "80%", x: "-40%" }}
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                      />
                    )}
                  </Link>
                  
                  {/* Hover background effect */}
                  <AnimatePresence>
                    {hoverItem === item.href && item.href !== activeSection && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-dark-300/50 rounded-md -z-0"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="ml-4 relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-light to-secondary-light blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <Link
                  href="/contact"
                  className="relative bg-gradient-to-r from-primary to-secondary px-5 py-2.5 rounded-md text-white font-medium flex items-center space-x-2 shadow-md"
                >
                  <FiShield className="w-4 h-4" />
                  <span>Secure Consultation</span>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-300/70 focus:outline-none transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              className="px-3 pt-3 pb-6 space-y-1.5 bg-gradient-to-b from-dark-200/95 to-dark-300/95 backdrop-blur-xl border-b border-gray-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === item.href 
                        ? 'text-white bg-gradient-to-r from-primary-dark/20 to-secondary-dark/20 border-l-2 border-accent' 
                        : 'text-gray-300 hover:text-white hover:bg-dark-200/70'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-4 border-t border-gray-800/30 mt-5">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 blur-sm"></div>
                  <Link
                    href="/contact"
                    className="relative bg-gradient-to-r from-primary to-secondary  text-center px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiLock className="w-4 h-4" />
                    <span>Secure Consultation</span>
                  </Link>
                </motion.div>
                
                <div className="flex items-center justify-center mt-5 space-x-4">
                  <span className="text-xs text-gray-500 font-medium tracking-wider">ADVANCED SECURITY SOLUTIONS</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
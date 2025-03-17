import React from 'react';
import Link from 'next/link';
import { FiGlobe, FiPhone, FiMail, FiShield, FiLock } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-4">
              SentraIntel
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading the development of comprehensive technological solutions that transform strategic communications management, enhance operational intelligence, and provide effective protection against complex threats.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Globe"
              >
                <FiGlobe />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Shield"
              >
                <FiShield />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Lock"
              >
                <FiLock />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <FiMail className="text-accent" />
                <span className="text-gray-400">contact@sentraintel.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-accent" />
                <span className="text-gray-400">+1 (646) 329 4054</span>
              </li>
              <li className="flex items-center space-x-3">
              <FiGlobe className="text-accent" />
              <span className="text-gray-400">358 8th Street Apt 301, Manhattan, NY</span>
            </li>
              <li className="flex items-center space-x-3">
                <FiGlobe className="text-accent" />
                <span className="text-gray-400">United States</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              ©2024  SentraIntel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiCheck } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after some time
      setTimeout(() => {
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
          interest: 'General Inquiry'
        });
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-dark-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute left-0 top-1/4 w-1/4 h-1/4 bg-gradient-radial from-accent/5 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-1/4 h-1/4 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
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
              Contact Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our team of experts is ready to understand your security challenges and provide tailored solutions to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="bg-dark-200 rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Company/Agency Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option>General Inquiry</option>
                  <option>Sentra Route Solutions</option>
                  <option>Sentra Shield Solutions</option>
                  <option>Sentra Insight Solutions</option>
                  <option>Custom Implementation</option>
                  <option>Partnership Opportunities</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Please describe your requirements or questions..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 border border-gray-700 rounded flex items-center justify-center mr-3">
                  <FiLock className="text-accent w-3 h-3" />
                </div>
                <p className="text-gray-400 text-sm">
                  Your information is encrypted and secure. We respect your privacy.
                </p>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow'
                  }`}
                >
                  {formStatus === 'submitting' && (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  )}
                  {formStatus === 'idle' && 'Submit Inquiry'}
                  {formStatus === 'success' && (
                    <span className="flex items-center">
                      <FiCheck className="mr-2" /> Message Sent
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="lg:pl-10"
          >
            <div className="bg-dark-200 rounded-xl p-8 border border-gray-800 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 font-medium mb-1">Email</p>
                  <div className="flex items-center">
                    <FiMail className="text-accent mr-3" />
                    <a href="mailto:contact@sentraintel.com" className="text-white hover:text-accent transition-colors duration-300">
                      contact@sentraintel.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Phone</p>
                  <div className="flex items-center">
                    <FiMail className="text-accent mr-3" />
                    <a href="tel:+18888367872" className="text-white hover:text-accent transition-colors duration-300">
                      +1 (888) SENTRA-1
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Headquarters</p>
                  <p className="text-white">United States, with global support</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-200 rounded-xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Who We Serve</h3>
              <p className="text-gray-300 mb-6">
                SentraIntel provides specialized solutions for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-white">Government Security Agencies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-white">Defense Forces</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-white">Critical Infrastructure Protection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-white">Global Corporations with Security Needs</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300 text-sm">
                  Our team provides personalized support and confidential consultations for organizations with specialized security requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
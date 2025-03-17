"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiCheck, FiPhone, FiMapPin, FiShield, FiUser, FiGlobe, FiSend, FiAlertTriangle } from 'react-icons/fi';

// Constants for easy customization
const CONTACT = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "py-24",
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.02,
  INPUT_FOCUS_RING: "ring-accent/70",
  CARD_BG: "bg-dark-200/90",
  CARD_HOVER_BORDER: "border-accent/40",
  FORM_BG: "bg-dark-300/80"
};

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
  const [activeField, setActiveField] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={`${CONTACT.SECTION_PADDING} bg-dark-100 relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: CONTACT.ANIMATION_DURATION }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${CONTACT.ACCENT_COLORS} bg-clip-text text-transparent`}>
              Contact Us
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Our team of experts is ready to understand your security challenges and provide tailored solutions to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: CONTACT.ANIMATION_DURATION }}
            variants={fadeInUp}
            className={`${CONTACT.CARD_BG} backdrop-blur-md rounded-xl p-8 border border-gray-800/70 shadow-lg`}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                <FiSend className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Secure Inquiry Form</h3>
                <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-transparent rounded mt-1"></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                >
                  <label htmlFor="name" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <FiUser className="mr-2 text-accent/70" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  onFocus={() => setActiveField('organization')}
                  onBlur={() => setActiveField(null)}
                >
                  <label htmlFor="organization" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <FiGlobe className="mr-2 text-accent/70" />
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                    placeholder="Company/Agency Name"
                  />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                >
                  <label htmlFor="email" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <FiMail className="mr-2 text-accent/70" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                    placeholder="you@example.com"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  onFocus={() => setActiveField('phone')}
                  onBlur={() => setActiveField(null)}
                >
                  <label htmlFor="phone" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <FiPhone className="mr-2 text-accent/70" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                whileHover={{ scale: 1.01 }}
                onFocus={() => setActiveField('interest')}
                onBlur={() => setActiveField(null)}
              >
                <label htmlFor="interest" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <FiShield className="mr-2 text-accent/70" />
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                >
                  <option>General Inquiry</option>
                  <option>Sentra Route Solutions</option>
                  <option>Sentra Shield Solutions</option>
                  <option>Sentra Insight Solutions</option>
                  <option>Custom Implementation</option>
                  <option>Partnership Opportunities</option>
                </select>
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                whileHover={{ scale: 1.01 }}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
              >
                <label htmlFor="message" className=" text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <FiMail className="mr-2 text-accent/70" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full ${CONTACT.FORM_BG} backdrop-blur-sm border border-gray-700/70 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:${CONTACT.INPUT_FOCUS_RING} transition-all duration-300`}
                  placeholder="Please describe your requirements or questions..."
                ></textarea>
              </motion.div>
              
              <div className="flex items-center p-4 rounded-lg bg-dark-300/50 border border-gray-800/40">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mr-3">
                  <FiLock className="text-accent" />
                </div>
                <p className="text-gray-400 text-sm">
                  Your information is encrypted and secure. We respect your privacy and maintain strict confidentiality.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: CONTACT.HOVER_SCALE }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                  }`}
                >
                  {formStatus === 'submitting' && (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Secure Submission...
                    </span>
                  )}
                  {formStatus === 'idle' && (
                    <span className="flex items-center">
                      <FiSend className="mr-2" /> Submit Secure Inquiry
                    </span>
                  )}
                  {formStatus === 'success' && (
                    <span className="flex items-center">
                      <FiCheck className="mr-2" /> Message Sent Successfully
                    </span>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: CONTACT.ANIMATION_DURATION, delay: 0.2 }}
            variants={staggerChildren}
            className="lg:pl-10"
          >
            <motion.div 
              variants={fadeInUp} 
              className={`${CONTACT.CARD_BG} backdrop-blur-md rounded-xl p-8 border border-gray-800/70 hover:${CONTACT.CARD_HOVER_BORDER} transition-all duration-300 mb-8 shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <FiMail className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-transparent rounded mt-1"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-dark-300/50 rounded-lg border border-gray-800/40 transition-all duration-300 hover:border-gray-700/60">
                  <p className="text-gray-300 font-medium mb-1 flex items-center">
                    <FiMail className="mr-2 text-accent/70" /> Email
                  </p>
                  <div className="flex items-center">
                    <a href="mailto:contact@sentraintel.com" className="text-white hover:text-accent transition-colors duration-300 ml-5">
                      contact@sentraintel.com
                    </a>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-300/50 rounded-lg border border-gray-800/40 transition-all duration-300 hover:border-gray-700/60">
                  <p className="text-gray-300 font-medium mb-1 flex items-center">
                    <FiPhone className="mr-2 text-accent/70" /> Phone
                  </p>
                  <div className="flex items-center">
                    <a href="tel:+16463294054" className="text-white hover:text-accent transition-colors duration-300 ml-5">
                      +1 (646) 329 4054
                    </a>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-300/50 rounded-lg border border-gray-800/40 transition-all duration-300 hover:border-gray-700/60">
                  <p className="text-gray-300 font-medium mb-1 flex items-center">
                    <FiMapPin className="mr-2 text-accent/70" /> Headquarters
                  </p>
                  <p className="text-white ml-5">NY, United States, with global support</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className={`${CONTACT.CARD_BG} backdrop-blur-md rounded-xl p-8 border border-gray-800/70 hover:${CONTACT.CARD_HOVER_BORDER} transition-all duration-300 shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <FiShield className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Who We Serve</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-transparent rounded mt-1"></div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                SentraIntel provides specialized solutions for:
              </p>
              
              <motion.ul 
                variants={staggerChildren} 
                className="space-y-4"
              >
                {[
                  "Government Security Agencies",
                  "Defense Forces",
                  "Critical Infrastructure Protection",
                  "Global Corporations with Security Needs"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={fadeIn}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5 shadow-sm">
                      <FiCheck className="text-white text-xs" />
                    </div>
                    <span className="ml-3 text-white">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="mt-8 pt-5 border-t border-gray-800/50 bg-dark-300/30 -mx-8 -mb-8 px-8 pb-8 rounded-b-xl">
                <div className="flex items-start">
                  <FiAlertTriangle className="text-accent mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Our team provides personalized support and confidential consultations for organizations with specialized security requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
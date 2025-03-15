"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiRadio, FiShield, FiCpu } from 'react-icons/fi';
import Link from 'next/link';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const productCategories = [
    {
      name: "Sentra Route",
      icon: <FiRadio className="w-6 h-6" />,
      description: "Advanced Tactical Solutions",
      color: "from-blue-500 to-blue-700",
      products: [
        {
          name: "Sentra Route X1",
          description: "Comprehensive solution for identification and advanced analysis of mobile communications across multiple technologies (2G, 3G, 4G, 5G NSA).",
          features: [
            "Multi-band and simultaneous analysis",
            "Secure remote access",
            "AI for target recognition and classification",
            "Portable system for tactical use in critical operations"
          ]
        },
        {
          name: "Sentra Route Tactical",
          description: "Robust portable equipment designed for rapid deployment in tactical land and air operations, offering precise location and quick operational response.",
          features: [
            "High precision geolocation",
            "Easy transport",
            "Extended autonomy",
            "Operable in hostile conditions"
          ]
        },
        {
          name: "Sentra Route Mobile",
          description: "Ultra-compact unit specialized for discreet, covert operations and strategic surveillance in urban and rural environments, ensuring maximum discretion.",
          features: [
            "Discreet form factor",
            "Compact design",
            "High autonomy",
            "Secure transmissions"
          ]
        }
      ]
    },
    {
      name: "Sentra Shield",
      icon: <FiShield className="w-6 h-6" />,
      description: "Protection and Comprehensive Management",
      color: "from-purple-600 to-purple-800",
      products: [
        {
          name: "Sentra Shield Blocker",
          description: "Advanced system for selective control and blocking of unauthorized mobile communications in critical areas.",
          features: [
            "Selective blocking",
            "Centralized management",
            "Automatic monitoring",
            "Customizable security policies"
          ]
        },
        {
          name: "Sentra Shield Guardian",
          description: "Proactive digital and mobile defense solution adaptable to different environments, providing advanced security against digital and physical threats.",
          features: [
            "Automated comprehensive defense",
            "Operational scalability",
            "Real-time threat detection",
            "Adaptive security protocols"
          ]
        },
        {
          name: "Sentra GeoLock",
          description: "Intelligent geofences for perimeter protection and predictive access control.",
          features: [
            "Proactive monitoring",
            "Automatic alerts",
            "Integration with surveillance systems",
            "Advanced behavioral analytics"
          ]
        }
      ]
    },
    {
      name: "Sentra Insight",
      icon: <FiCpu className="w-6 h-6" />,
      description: "Intelligence and Predictive Analysis",
      color: "from-teal-500 to-teal-700",
      products: [
        {
          name: "Sentra Analytics",
          description: "Strategic platform for deep data analysis for anticipation and effective management of operational risks.",
          features: [
            "Predictive analysis",
            "Real-time visualizations",
            "Advanced data processing",
            "Pattern recognition algorithms"
          ]
        },
        {
          name: "Sentra Track & Trace",
          description: "Advanced technology for dynamic and predictive tracking, ideal for real-time risk management.",
          features: [
            "Precise tracking",
            "Predictive analysis",
            "Automation",
            "Integrated monitoring systems"
          ]
        },
        {
          name: "Sentra AI Intel",
          description: "Artificial intelligence platform for automatic and predictive analysis of large volumes of operational data.",
          features: [
            "Deep analysis",
            "Reduction of operational times",
            "Simple integration",
            "Advanced machine learning"
          ]
        }
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-dark-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent" />
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-3xl" />
      
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
              Our Products
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mb-6" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our comprehensive suite of advanced technological solutions designed to meet the complex challenges of today's security landscape.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center p-4 rounded-lg ${
                activeCategory === index 
                  ? `bg-gradient-to-r ${category.color} text-white` 
                  : 'bg-dark-200 hover:bg-dark-300 text-gray-300'
              } transition-all duration-300`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="w-10 h-10 rounded-full bg-dark-300 bg-opacity-30 flex items-center justify-center mr-3">
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-xs opacity-80">{category.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productCategories[activeCategory].products.map((product, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={slideIn}
              className="bg-dark-200 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${productCategories[activeCategory].color}`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center">
                    {productCategories[activeCategory].icon}
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <div className="space-y-3">
                  {product.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start">
                      <FiChevronRight className="text-accent mt-1 flex-shrink-0" />
                      <span className="ml-2 text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-accent group-hover:text-white transition-colors duration-300">
                    Learn more <FiChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all duration-300"
          >
            View All Products <FiChevronRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiRadio, FiShield, FiCpu, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { productCategories } from '@/data/products';

// Constants for easy customization
const PRODUCTS = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "py-24",
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.03,
  CARD_BG: "bg-dark-200/90",
  CARD_BORDER: "border-gray-800/70",
  CARD_HOVER_BORDER: "border-gray-700/60"
};

// Map to get the correct icon component based on the string identifier
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'radio':
      return <FiRadio className="w-6 h-6" />;
    case 'shield':
      return <FiShield className="w-6 h-6" />;
    case 'cpu':
      return <FiCpu className="w-6 h-6" />;
    default:
      return <FiRadio className="w-6 h-6" />;
  }
};

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`${PRODUCTS.SECTION_PADDING} bg-dark-100 relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent" />
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute left-0 bottom-1/3 w-1/4 h-1/4 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: PRODUCTS.ANIMATION_DURATION }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">Product Suite</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${PRODUCTS.ACCENT_COLORS} bg-clip-text text-transparent`}>
              Our Products
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our comprehensive suite of advanced technological solutions designed to meet the complex challenges of today's security landscape.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {productCategories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: PRODUCTS.HOVER_SCALE }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                activeCategory === index 
                  ? `bg-gradient-to-r ${category.color} text-white border-white/20 shadow-lg` 
                  : 'bg-dark-200/80 hover:bg-dark-300/80 text-gray-300 border-gray-800/50 hover:border-gray-700/50'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className={`w-12 h-12 rounded-full ${
                activeCategory === index
                  ? 'bg-white/20' 
                  : 'bg-dark-300/80'
              } flex items-center justify-center mr-4 transition-colors duration-300`}>
                {getIconComponent(category.iconName)}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-sm opacity-80">{category.description}</p>
                {activeCategory === index && (
                  <div className="h-0.5 w-12 bg-white mt-2 rounded-full"></div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories[activeCategory].products.map((product, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                variants={slideIn}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`${PRODUCTS.CARD_BG} rounded-xl overflow-hidden border ${PRODUCTS.CARD_BORDER} hover:${PRODUCTS.CARD_HOVER_BORDER} transition-all duration-300 group backdrop-blur-sm shadow-lg`}
              >
                <div className={`h-2 bg-gradient-to-r ${productCategories[activeCategory].color}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <div className={`w-10 h-10 rounded-full ${
                      hoveredCard === index 
                        ? `bg-gradient-to-r ${productCategories[activeCategory].color} text-white` 
                        : 'bg-dark-300/80 text-gray-400'
                      } flex items-center justify-center transition-all duration-300`}>
                      {getIconComponent(productCategories[activeCategory].iconName)}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 min-h-[80px]">{product.description}</p>
                  
                  <div className="bg-dark-300/50 rounded-lg p-4 mb-6 border border-gray-800/40">
                    <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                      <span>Key Features</span>
                      <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-700 ml-2"></div>
                    </h4>
                    <div className="space-y-3">
                      {product.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start">
                          <FiChevronRight className={`mt-1 flex-shrink-0 ${
                            hoveredCard === index ? 'text-white' : 'text-accent'
                          } transition-colors duration-300`} />
                          <span className="ml-2 text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800/50 flex justify-between items-center">
                    <Link 
                      href={`/products/${product.slug || product.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="inline-flex items-center text-accent group-hover:text-white transition-colors duration-300"
                    >
                      Learn more 
                      <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <span className="text-xs text-gray-500">
                      {productCategories[activeCategory].name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/products" 
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300 group"
          >
            <span>View All Products</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
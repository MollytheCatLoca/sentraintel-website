"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiRadio, FiShield, FiCpu, FiArrowRight, FiLock, FiGlobe, FiStar } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '@/data/products';

// Constants for easy customization
const PRODUCTS = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "py-28",
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.03,
  CARD_BG: "bg-dark-200/90",
  CARD_BORDER: "border-gray-800/70",
  CARD_HOVER_BORDER: "border-gray-700/60",
  SECTION_BG: "bg-dark-100",
  IMAGE_OVERLAY: "bg-gradient-to-t from-dark/90 to-dark/30"
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
    case 'lock':
      return <FiLock className="w-6 h-6" />;
    case 'globe':
      return <FiGlobe className="w-6 h-6" />;
    default:
      return <FiRadio className="w-6 h-6" />;
  }
};

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className={`${PRODUCTS.SECTION_PADDING} ${PRODUCTS.SECTION_BG} relative overflow-hidden`}>
      {/* Dynamic Background - based on active category */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`bg-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {productCategories[activeCategory].image && (
            <>
              <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm z-0"></div>
              <Image 
                src={productCategories[activeCategory].image} 
                alt={productCategories[activeCategory].name}
                fill
                className="object-cover opacity-30 mix-blend-overlay"
                priority
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Additional background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent z-10" />
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl z-10" />
      <div className="absolute left-0 bottom-1/3 w-1/4 h-1/4 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl z-10" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: PRODUCTS.ANIMATION_DURATION }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm font-medium text-gray-300">Advanced Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${PRODUCTS.ACCENT_COLORS} bg-clip-text text-transparent`}>
              Strategic Technology Suite
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Engineered for excellence, our cutting-edge solutions empower organizations to navigate complex security landscapes with confidence and precision.
          </p>
        </motion.div>

        {/* Category Tabs - Enhanced and Moved Up */}
        <div className="mb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Product Categories
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-primary to-secondary my-3"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {productCategories.map((category, index) => (
              <motion.button
                key={index}
                variants={zoomIn}
                whileHover={{ scale: PRODUCTS.HOVER_SCALE, y: -5 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                  activeCategory === index 
                    ? `bg-gradient-to-r from-blue-600 to-blue-800 text-white border-white/20 shadow-lg` 
                    : 'bg-dark-200/80 hover:bg-dark-300/80 text-gray-300 border-gray-800/50 hover:border-gray-700/50'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className={`w-10 h-10 rounded-full ${
                  activeCategory === index
                    ? 'bg-white/20' 
                    : 'bg-dark-300/80'
                } flex items-center justify-center mr-3 transition-colors duration-300`}>
                  {getIconComponent(category.iconName)}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-base">{category.name}</h3>
                  <p className="text-xs opacity-80">{category.description}</p>
                  {activeCategory === index && (
                    <div className="h-0.5 w-10 bg-white mt-2 rounded-full"></div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Category Overview - New Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`category-overview-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Category Image */}
              <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-gray-800/50">
                {productCategories[activeCategory].image ? (
                  <Image
                    src={productCategories[activeCategory].image}
                    alt={productCategories[activeCategory].name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${productCategories[activeCategory].color}`}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{productCategories[activeCategory].name}</h3>
                  <p className="text-white/80">{productCategories[activeCategory].description}</p>
                  {productCategories[activeCategory].tagline && (
                    <div className="mt-4 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                      {productCategories[activeCategory].tagline}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Category Description */}
              <div className="w-full lg:w-1/2 p-6 bg-dark-200/80 backdrop-blur-md rounded-2xl border border-gray-800/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${productCategories[activeCategory].color} flex items-center justify-center mb-6`}>
                  {getIconComponent(productCategories[activeCategory].iconName)}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  About {productCategories[activeCategory].name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {activeCategory === 0 && "Our advanced tactical solutions deliver comprehensive operational capabilities with unparalleled precision and reliability. Designed for mission-critical environments where performance matters most."}
                  {activeCategory === 1 && "Comprehensive protection systems engineered to safeguard critical assets and sensitive information against evolving threats. Our multi-layered defense approach ensures superior security posture."}
                  {activeCategory === 2 && "Transform complex data into actionable intelligence with our advanced analytics platforms. Uncover hidden patterns, anticipate emerging situations, and make informed decisions with confidence."}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {activeCategory === 0 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiRadio className="text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Multi-technology</h4>
                          <p className="text-gray-400 text-sm">Comprehensive spectrum coverage</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiGlobe className="text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Field-ready</h4>
                          <p className="text-gray-400 text-sm">Rugged design for any environment</p>
                        </div>
                      </div>
                    </>
                  )}
                  {activeCategory === 1 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiShield className="text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Advanced Protection</h4>
                          <p className="text-gray-400 text-sm">Multi-layer security architecture</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiLock className="text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Secured Environments</h4>
                          <p className="text-gray-400 text-sm">Comprehensive facility protection</p>
                        </div>
                      </div>
                    </>
                  )}
                  {activeCategory === 2 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiCpu className="text-teal-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Advanced Analytics</h4>
                          <p className="text-gray-400 text-sm">AI-powered pattern recognition</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center mr-3 mt-1">
                          <FiStar className="text-teal-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Predictive Intelligence</h4>
                          <p className="text-gray-400 text-sm">Future state modeling</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Products Grid - Enhanced */}
        <div className="mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-8"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {productCategories[activeCategory].name} Products
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-primary to-secondary my-4"></div>
          </motion.div>
          
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
                  {/* Product Image */}
                  {product.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                      
                      {/* Product Badge */}
                      {product.badge && (
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${product.badge.color}`}>
                          {product.badge.text}
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">{product.name}</h3>
                      </div>
                    </div>
                  )}
                  
                  {/* Product Content */}
                  <div className="p-6">
                    {!product.image && (
                      <div className="flex justify-between items-start mb-5">
                        <h3 className="text-xl font-bold text-white">{product.name}</h3>
                        
                        {/* Badge if no image */}
                        {product.badge && (
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${product.badge.color}`}>
                            {product.badge.text}
                          </div>
                        )}
                        
                        <div className={`w-10 h-10 rounded-full ${
                          hoveredCard === index 
                            ? `bg-gradient-to-r ${productCategories[activeCategory].color} text-white` 
                            : 'bg-dark-300/80 text-gray-400'
                          } flex items-center justify-center transition-all duration-300`}>
                          {getIconComponent(productCategories[activeCategory].iconName)}
                        </div>
                      </div>
                    )}
                    
                    <p className="text-gray-400 mb-6 min-h-[80px]">{product.description}</p>
                    
                    <div className="bg-dark-300/50 rounded-lg p-4 mb-6 border border-gray-800/40">
                      <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                        <span>Key Features</span>
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-700 ml-2"></div>
                      </h4>
                      <div className="space-y-3">
                        {product.features.slice(0, 4).map((feature, fidx) => (
                          <div key={fidx} className="flex items-start">
                            <FiChevronRight className={`mt-1 flex-shrink-0 ${
                              hoveredCard === index ? 'text-white' : 'text-accent'
                            } transition-colors duration-300`} />
                            <span className="ml-2 text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {product.features.length > 4 && (
                          <div className="text-right text-xs text-accent">
                            +{product.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-800/50 flex justify-between items-center">
                      <Link 
                        href="/products" 
                        className="inline-flex items-center text-accent group-hover:text-white transition-colors duration-300"
                      >
                        View details 
                        <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      
                      {/* Use badge color for category tag */}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.badge ? product.badge.color : `bg-gradient-to-r ${productCategories[activeCategory].color}`
                      } bg-opacity-20 text-white`}>
                        {productCategories[activeCategory].name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
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
            <span>View All {productCategories[activeCategory].name} Products</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
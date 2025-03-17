// src/app/products/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiSearch, FiFilter, FiGrid, FiList, FiChevronDown, FiChevronRight, FiInfo, FiRadio, FiShield, FiCpu } from 'react-icons/fi';
import MainLayout from '@/components/layout/MainLayout';
import ProductCategoryTabs from '@/components/products/ProductCategoryTabs';
import ProductViewToggle from '@/components/products/ProductViewToggle';
import ProductGridView from '@/components/products/ProductGridView';
import ProductListView from '@/components/products/ProductListView';
import ProductDetailModal from '@/components/products/ProductDetailModal';
import { productCategories } from '@/data/products';

// Constants for easy customization
const PRODUCTS_PAGE = {
  ANIMATION_DURATION: 0.7,
  SECTION_PADDING: "pt-32 pb-24",
  ACCENT_COLORS: "from-accent to-secondary",
  PRIMARY_COLORS: "from-primary to-secondary",
  HOVER_SCALE: 1.03,
  BG_COLOR: "bg-dark-100",
  CARD_BG: "bg-dark-200/90",
  CARD_BORDER: "border-gray-800/70",
  CARD_HOVER_BORDER: "border-gray-700/60",
  IMAGE_OVERLAY: "bg-gradient-to-t from-dark/90 to-dark/30"
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    type: [],
    compatibility: []
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Reset selected product and search when changing categories
  useEffect(() => {
    setSelectedProduct(null);
    setSearchQuery('');
    setShowFilters(false);
  }, [activeCategory]);

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const filterProducts = () => {
    const currentProducts = productCategories[activeCategory].products;
    
    if (!searchQuery && Object.values(selectedFilters).every(filters => filters.length === 0)) {
      return currentProducts;
    }
    
    return currentProducts.filter(product => {
      // Search filtering
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (!matchesSearch) return false;
      
      // Other filters (placeholder for real filtering logic)
      // This would be expanded based on actual filter categories
      const typeFilters = selectedFilters.type;
      const compatibilityFilters = selectedFilters.compatibility;
      
      const passesTypeFilter = typeFilters.length === 0 || typeFilters.includes(product.badge?.text || '');
      const passesCompatibilityFilter = compatibilityFilters.length === 0 || 
        (product.details?.compatibleWith && 
          compatibilityFilters.some(f => product.details.compatibleWith?.includes(f)));
      
      return passesTypeFilter && passesCompatibilityFilter;
    });
  };

  const filteredProducts = filterProducts();

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const currentFilters = [...(prev[category] || [])];
      const index = currentFilters.indexOf(value);
      
      if (index >= 0) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(value);
      }
      
      return {
        ...prev,
        [category]: currentFilters
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      type: [],
      compatibility: []
    });
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  return (
    <MainLayout>
      <section className={`${PRODUCTS_PAGE.SECTION_PADDING} ${PRODUCTS_PAGE.BG_COLOR} relative overflow-hidden min-h-screen`}>
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
                  className="object-cover opacity-20 mix-blend-overlay"
                  priority
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent z-10" />
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent rounded-full filter blur-3xl z-10" />
        <div className="absolute left-0 bottom-1/3 w-1/4 h-1/4 bg-gradient-radial from-secondary/10 to-transparent rounded-full filter blur-3xl z-10" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: PRODUCTS_PAGE.ANIMATION_DURATION }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
              <span className="text-sm font-medium text-gray-300">Advanced Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${PRODUCTS_PAGE.ACCENT_COLORS} bg-clip-text text-transparent`}>
                Strategic Technology Suite
              </span>
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
              <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Engineered for excellence, our cutting-edge solutions empower organizations to navigate complex security challenges with unparalleled precision and confidence.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="mb-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex justify-center gap-4"
            >
              {productCategories.map((category, index) => (
                <motion.button
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: PRODUCTS_PAGE.HOVER_SCALE, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                    activeCategory === index 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border-white/20 shadow-lg' 
                      : 'bg-dark-200/80 hover:bg-dark-300/80 text-gray-300 border-gray-800/50 hover:border-gray-700/50'
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  <div className={`w-10 h-10 rounded-full ${
                    activeCategory === index
                      ? 'bg-white/20' 
                      : 'bg-dark-300/80'
                  } flex items-center justify-center mr-3 transition-colors duration-300`}>
                    {category.iconName === 'radio' ? <FiRadio className="w-5 h-5" /> : 
                     category.iconName === 'shield' ? <FiShield className="w-5 h-5" /> : 
                     <FiCpu className="w-5 h-5" />}
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

          {/* Featured Category Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 mt-8"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 aspect-[3/1] mb-8">
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
              <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
                <div className={`inline-block px-3 py-1 rounded-full mb-4 ${productCategories[activeCategory].color} bg-opacity-90 text-white text-sm`}>
                  {productCategories[activeCategory].tagline || productCategories[activeCategory].description}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{productCategories[activeCategory].name}</h2>
                <p className="text-white/80 text-lg md:w-4/5">
                  {activeCategory === 0 && "Our advanced tactical solutions deliver comprehensive operational capabilities with unparalleled precision and reliability."}
                  {activeCategory === 1 && "Comprehensive protection systems engineered to safeguard critical assets and sensitive information against evolving threats."}
                  {activeCategory === 2 && "Transform complex data into actionable intelligence with our advanced analytics platforms."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-2xl">
                <div className={`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-colors ${isSearchFocused ? 'text-primary' : 'text-gray-400'}`}>
                  <FiSearch className="w-5 h-5" />
                </div>
                <input
                  ref={searchInputRef}
                  type="search"
                  className="w-full p-4 pl-12 pr-4 bg-dark-200/80 border border-gray-800/70 focus:border-primary/70 rounded-xl text-white placeholder-gray-400 outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="Search products, features, capabilities..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
              
              {/* Filters Button & View Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 py-3 px-5 rounded-xl border ${showFilters ? 'bg-primary/20 border-primary/50 text-white' : 'bg-dark-200/80 border-gray-800/70 text-gray-300 hover:bg-dark-300/80'} transition-colors duration-300`}
                >
                  <FiFilter className="w-5 h-5" />
                  <span>Filters</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                
                <ProductViewToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
            </div>
            
            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-dark-200/90 backdrop-blur-md border border-gray-800/70 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Refine Results</h3>
                      <button
                        onClick={clearFilters}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Clear All Filters
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Type Filter */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Product Type</h4>
                        <div className="space-y-2">
                          {["Flagship", "Field-Ready", "Covert", "Secure Zone", "Integrated", "Perimeter", "Strategic", "Visibility", "Advanced AI"].map((type) => (
                            <label key={type} className="flex items-center cursor-pointer group">
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedFilters.type.includes(type)}
                                onChange={() => toggleFilter('type', type)}
                              />
                              <div className={`w-5 h-5 mr-3 rounded border flex items-center justify-center transition-colors ${selectedFilters.type.includes(type) ? 'bg-primary border-primary text-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                {selectedFilters.type.includes(type) && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-gray-300 group-hover:text-white transition-colors">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      {/* Compatibility Filter */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Compatibility</h4>
                        <div className="space-y-2">
                          {["Sentra Shield", "Sentra Route", "Sentra Insight", "SIEM systems", "Third-party systems"].map((item) => (
                            <label key={item} className="flex items-center cursor-pointer group">
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedFilters.compatibility.includes(item)}
                                onChange={() => toggleFilter('compatibility', item)}
                              />
                              <div className={`w-5 h-5 mr-3 rounded border flex items-center justify-center transition-colors ${selectedFilters.compatibility.includes(item) ? 'bg-primary border-primary text-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                {selectedFilters.compatibility.includes(item) && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      {/* Active Filters Summary */}
                      <div className="lg:col-span-1">
                        <h4 className="text-white font-medium mb-3">Active Filters</h4>
                        <div className="bg-dark-300/50 rounded-lg p-3 h-[calc(100%-32px)]">
                          {Object.entries(selectedFilters).some(([_, values]) => values.length > 0) ? (
                            <div className="space-y-2">
                              {Object.entries(selectedFilters).map(([category, values]) => 
                                values.length > 0 && (
                                  <div key={category} className="text-sm">
                                    <span className="text-gray-400">{category === 'type' ? 'Type' : 'Compatibility'}: </span>
                                    <span className="text-white">{values.join(', ')}</span>
                                  </div>
                                )
                              )}
                              {searchQuery && (
                                <div className="text-sm">
                                  <span className="text-gray-400">Search: </span>
                                  <span className="text-white">{searchQuery}</span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-gray-400 text-sm flex items-center h-full justify-center">
                              <FiInfo className="mr-2" /> No active filters
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Results Summary */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center">
                  {productCategories[activeCategory].name} Solutions
                  {(searchQuery || Object.values(selectedFilters).some(filters => filters.length > 0)) && (
                    <span className="ml-3 text-sm px-3 py-1 bg-dark-300/80 rounded-full text-gray-300">
                      {filteredProducts.length} results
                    </span>
                  )}
                </h2>
              </div>
              <div className="text-sm text-gray-400">
                Showing {filteredProducts.length} of {productCategories[activeCategory].products.length} products
              </div>
            </div>
          </motion.div>

          {/* Products Display */}
          {filteredProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <ProductGridView 
                products={filteredProducts}
                category={productCategories[activeCategory]}
                onSelectProduct={setSelectedProduct}
              />
            ) : (
              <ProductListView 
                products={filteredProducts}
                category={productCategories[activeCategory]}
                onSelectProduct={setSelectedProduct}
              />
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-dark-200/50 backdrop-blur-sm rounded-2xl border border-gray-800/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-300/80 flex items-center justify-center">
                <FiSearch className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 transition-colors"
              >
                <FiChevronRight className="mr-2" /> Clear filters and try again
              </button>
            </motion.div>
          )}

          {/* Product Detail Modal */}
          {selectedProduct && (
            <ProductDetailModal
              product={productCategories[activeCategory].products.find(
                p => (p.slug || p.name.toLowerCase().replace(/\s+/g, '-')) === selectedProduct
              )}
              category={productCategories[activeCategory]}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </section>
    </MainLayout>
  );
}
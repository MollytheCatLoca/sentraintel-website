// src/app/products/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import ProductCategoryTabs from '@/components/products/ProductCategoryTabs';
import ProductViewToggle from '@/components/products/ProductViewToggle';
import ProductGridView from '@/components/products/ProductGridView';
import ProductListView from '@/components/products/ProductListView';
import ProductDetailModal from '@/components/products/ProductDetailModal';
import { productCategories } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Reset selected product when changing categories
  useEffect(() => {
    setSelectedProduct(null);
  }, [activeCategory]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-24 bg-dark-100 relative overflow-hidden min-h-screen">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent" />
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-1/3 w-1/4 h-1/4 bg-gradient-radial from-secondary/5 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-dark-200/80 backdrop-blur-sm border border-gray-700/30">
              <span className="text-sm font-medium text-gray-300">Product Catalog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
              <div className="w-16 h-1 mx-2 bg-gradient-to-r from-primary to-secondary rounded"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/40"></div>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our comprehensive suite of advanced technological solutions designed to meet the complex security challenges of today's interconnected world.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <ProductCategoryTabs 
            categories={productCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {productCategories[activeCategory].name} Solutions
            </h2>
            <ProductViewToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>

          {/* Products Display */}
          {viewMode === 'grid' ? (
            <ProductGridView 
              products={productCategories[activeCategory].products}
              category={productCategories[activeCategory]}
              onSelectProduct={setSelectedProduct}
            />
          ) : (
            <ProductListView 
              products={productCategories[activeCategory].products}
              category={productCategories[activeCategory]}
              onSelectProduct={setSelectedProduct}
            />
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
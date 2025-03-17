// src/components/products/ProductCategoryTabs.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProductCategory } from '@/data/products';
import { getIconComponent } from '@/utils/iconHelpers';
import { shouldUseFallbackImage, DEFAULT_PRODUCT_IMAGE } from '@/utils/imageHelpers';

interface ProductCategoryTabsProps {
  categories: ProductCategory[];
  activeCategory: number;
  setActiveCategory: (index: number) => void;
}

const ProductCategoryTabs: React.FC<ProductCategoryTabsProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-10">
      {categories.map((category, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
            activeCategory === index 
              ? `bg-gradient-to-r ${category.color} text-white border-white/20 shadow-lg` 
              : 'bg-dark-200/80 hover:bg-dark-300/80 text-gray-300 border-gray-800/50 hover:border-gray-700/50'
          }`}
          onClick={() => setActiveCategory(index)}
        >
          <div className={`relative w-14 h-14 overflow-hidden rounded-full ${
            activeCategory === index
              ? 'ring-2 ring-white/30' 
              : 'bg-dark-300/80'
          } flex items-center justify-center mr-4 transition-all duration-300`}>
            {category.image ? (
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover opacity-80"
              />
            ) : (
              <div className="text-accent">{getIconComponent(category.iconName)}</div>
            )}
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
  );
};

export default ProductCategoryTabs;
// src/components/products/ProductListItem.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import { Product, ProductCategory } from '@/data/products';
import { getIconComponent } from '@/utils/iconHelpers';
import { shouldUseFallbackImage, DEFAULT_PRODUCT_IMAGE } from '@/utils/imageHelpers';

interface ProductListItemProps {
  product: Product;
  category: ProductCategory;
  onSelect: (productSlug: string) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product, category, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const shouldShowDefaultImage = shouldUseFallbackImage(product.image) || imageError;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-200/90 rounded-xl overflow-hidden border border-gray-800/70 hover:border-gray-700/60 transition-all duration-300 group backdrop-blur-sm shadow-lg"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-64 h-48 bg-dark-300 flex-shrink-0">
          {shouldShowDefaultImage ? (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-300">
              <Image 
                src={DEFAULT_PRODUCT_IMAGE}
                alt={product.name}
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark-300/70 to-dark-200/70" />
              <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center">
                {getIconComponent(category.iconName)}
              </div>
            </div>
          ) : (
            <Image 
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-300/80 opacity-80" />
          <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${category.color}`} />
        </div>
        
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <span className="text-xs text-gray-500 bg-dark-300/70 px-2 py-1 rounded">
              {category.name}
            </span>
          </div>
          
          <p className="text-gray-400 mb-4">{product.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {product.features.slice(0, 4).map((feature, fidx) => (
              <div key={fidx} className="flex items-start">
                <FiCheckCircle className="mt-1 flex-shrink-0 text-accent" />
                <span className="ml-2 text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
            {product.features.length > 4 && (
              <div className="text-right text-sm text-gray-500 md:col-span-2">
                +{product.features.length - 4} more features
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={() => onSelect(product.slug || product.name.toLowerCase().replace(/\s+/g, '-'))}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-dark-300 text-white hover:bg-dark-200 transition-colors duration-300"
            >
              View Details
              <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductListItem;
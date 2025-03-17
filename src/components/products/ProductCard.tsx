// src/components/products/ProductCard.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import { Product, ProductCategory } from '@/data/products';
import { getIconComponent } from '@/utils/iconHelpers';
import { shouldUseFallbackImage, DEFAULT_PRODUCT_IMAGE } from '@/utils/imageHelpers';

interface ProductCardProps {
  product: Product;
  category: ProductCategory;
  onSelect: (productSlug: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, category, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const shouldShowDefaultImage = shouldUseFallbackImage(product.image) || imageError;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-dark-200/90 rounded-xl overflow-hidden border border-gray-800/70 hover:border-gray-700/60 transition-all duration-300 group backdrop-blur-sm shadow-lg"
    >
      <div className={`h-2 bg-gradient-to-r ${category.color}`} />
      <div className="relative h-48 bg-dark-300">
        {shouldShowDefaultImage ? (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-300">
            {/* Default image container with category icon overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-400 mb-6">{product.description}</p>
        
        <div className="bg-dark-300/50 rounded-lg p-4 mb-4 border border-gray-800/40">
          <div className="flex items-center mb-2">
            <h4 className="text-white text-sm font-medium">Key Features</h4>
            <div className="ml-2 h-px flex-grow bg-gradient-to-r from-gray-700/50 to-transparent"></div>
          </div>
          <div className="space-y-2">
            {product.features.slice(0, 3).map((feature, fidx) => (
              <div key={fidx} className="flex items-start">
                <FiCheckCircle className="mt-1 flex-shrink-0 text-accent" />
                <span className="ml-2 text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <div className="text-right text-xs text-gray-500">
                +{product.features.length - 3} more features
              </div>
            )}
            {product.details?.specifications && (
              <div className="mt-2 pt-2 border-t border-gray-800/30">
                <div className="text-xs text-gray-500">
                  {Object.entries(product.details.specifications[0])[0][0]}: <span className="text-gray-400">{Object.entries(product.details.specifications[0])[0][1]}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-800/50 flex justify-between items-center">
          <button 
            onClick={() => onSelect(product.slug || product.name.toLowerCase().replace(/\s+/g, '-'))}
            className="inline-flex items-center text-accent group-hover:text-white transition-colors duration-300"
          >
            View Details
            <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <span className="text-xs text-gray-500">
            {category.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
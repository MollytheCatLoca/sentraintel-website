// Add this component to src/components/products/FeaturedProducts.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { ProductCategory } from '@/data/products';
import { shouldUseFallbackImage, DEFAULT_PRODUCT_IMAGE } from '@/utils/imageHelpers';

interface FeaturedProductsProps {
  categories: ProductCategory[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ categories }) => {
  return (
    <div className="mt-16 mb-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Featured Products</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our most advanced solutions designed to meet the complex challenges of today's security landscape.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          // Get the first product from each category
          const featuredProduct = category.products[0];
          const shouldShowDefaultImage = shouldUseFallbackImage(featuredProduct.image);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/60 group"
            >
              <div className="relative h-48">
                {shouldShowDefaultImage ? (
                  <Image
                    src={category.image || DEFAULT_PRODUCT_IMAGE}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={featuredProduct.image!}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-90" />
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${category.color}`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{featuredProduct.name}</h3>
                    <span className="text-xs bg-dark-300/80 text-gray-300 px-2 py-1 rounded">
                      {category.name}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {featuredProduct.description}
                </p>
                
                <Link
                  href={`/products?category=${category.slug}&product=${featuredProduct.slug}`}
                  className="flex items-center text-accent group-hover:text-white transition-colors duration-300"
                >
                  <span>View Details</span>
                  <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
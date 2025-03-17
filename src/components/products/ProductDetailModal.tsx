// src/components/products/ProductDetailModal.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiInfo, FiTarget, FiList } from 'react-icons/fi';
import { Product, ProductCategory } from '@/data/products';
import { getIconComponent } from '@/utils/iconHelpers';
import { shouldUseFallbackImage, DEFAULT_PRODUCT_IMAGE } from '@/utils/imageHelpers';

interface ProductDetailModalProps {
  product?: Product;
  category: ProductCategory;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, category, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'use-cases'>('overview');
  
  if (!product) return null;
  
  const shouldShowDefaultImage = shouldUseFallbackImage(product.image) || imageError;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-dark-200 rounded-xl border border-gray-700 shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-80 bg-dark-300">
          {shouldShowDefaultImage ? (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-300">
              <Image 
                src={DEFAULT_PRODUCT_IMAGE}
                alt={product.name}
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark-300/70 to-dark-200/70" />
              <div className="z-10 w-24 h-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center">
                {getIconComponent(category.iconName)}
              </div>
            </div>
          ) : (
            <Image 
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-90" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-300/80 text-white hover:bg-dark-200 flex items-center justify-center transition-colors duration-300"
          >
            ✕
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className={`h-1 w-20 bg-gradient-to-r ${category.color} mb-4`} />
            <h2 className="text-3xl font-bold text-white">{product.name}</h2>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-800">
          <div className="flex space-x-2 p-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeTab === 'overview' 
                  ? 'bg-dark-300 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-300/50'
              } transition-colors duration-200`}
            >
              <FiInfo />
              <span>Overview</span>
            </button>
            {product.details?.specifications && (
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'specs' 
                    ? 'bg-dark-300 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-300/50'
                } transition-colors duration-200`}
              >
                <FiList />
                <span>Specifications</span>
              </button>
            )}
            {product.details?.useCases && (
              <button
                onClick={() => setActiveTab('use-cases')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'use-cases' 
                    ? 'bg-dark-300 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-300/50'
                } transition-colors duration-200`}
              >
                <FiTarget />
                <span>Use Cases</span>
              </button>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <>
                  <h3 className="text-xl font-semibold text-white mb-4">Product Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.details?.overview || product.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <FiCheckCircle className="text-accent" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'specs' && product.details?.specifications && (
                <>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                  <div className="bg-dark-300/50 rounded-xl p-6 border border-gray-800/40">
                    <table className="w-full">
                      <tbody>
                        {product.details.specifications.map((spec, index) => {
                          const [key, value] = Object.entries(spec)[0];
                          return (
                            <tr key={index} className={index % 2 === 0 ? 'bg-dark-300/30' : ''}>
                              <td className="py-3 px-4 text-gray-300 font-medium">{key}</td>
                              <td className="py-3 px-4 text-white">{value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              
              {activeTab === 'use-cases' && product.details?.useCases && (
                <>
                  <h3 className="text-xl font-semibold text-white mb-4">Recommended Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.details.useCases.map((useCase, index) => (
                      <div key={index} className="bg-dark-300/50 rounded-lg p-4 border border-gray-800/40">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                            <FiTarget className="text-accent" />
                          </div>
                          <div>
                            <p className="text-gray-200">{useCase}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div>
              <div className="bg-dark-200/90 rounded-xl p-6 border border-gray-800/70 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Product Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-500 text-sm">Category</div>
                    <div className="text-white flex items-center space-x-2">
                      <span>{category.name}</span>
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gray-800 my-4" />
                  
                  <div>
                    <div className="text-gray-500 text-sm">Product Name</div>
                    <div className="text-white">{product.name}</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500 text-sm">Product ID</div>
                    <div className="text-white">
                      {product.slug || product.name.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-200/90 rounded-xl p-6 border border-gray-800/70">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-gray-400 mb-6">
                  Interested in this product? Contact our team for more information and a personalized demo.
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all duration-300 text-center"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal;
// src/components/products/ProductGridView.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductCategory } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

interface ProductGridViewProps {
  products: Product[];
  category: ProductCategory;
  onSelectProduct: (productSlug: string) => void;
}

const ProductGridView: React.FC<ProductGridViewProps> = ({ products, category, onSelectProduct }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="grid-view"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product, index) => (
          <ProductCard 
            key={product.slug || product.name}
            product={product}
            category={category}
            onSelect={onSelectProduct}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductGridView;
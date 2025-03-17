// src/components/products/ProductListView.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductCategory } from '@/data/products';
import ProductListItem from '@/components/products/ProductListItem';

interface ProductListViewProps {
  products: Product[];
  category: ProductCategory;
  onSelectProduct: (productSlug: string) => void;
}

const ProductListView: React.FC<ProductListViewProps> = ({ products, category, onSelectProduct }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="list-view"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {products.map((product, index) => (
          <ProductListItem 
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

export default ProductListView;
// src/components/products/ProductViewToggle.tsx
'use client';

import React from 'react';
import { FiGrid, FiList } from 'react-icons/fi';

interface ProductViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ProductViewToggle: React.FC<ProductViewToggleProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-dark-300/70 rounded-lg flex p-1 backdrop-blur-sm">
      <button 
        className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-dark-200 text-white' : 'text-gray-400 hover:text-white'}`}
        onClick={() => setViewMode('grid')}
        aria-label="Grid View"
      >
        <FiGrid />
      </button>
      <button 
        className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-dark-200 text-white' : 'text-gray-400 hover:text-white'}`}
        onClick={() => setViewMode('list')}
        aria-label="List View"
      >
        <FiList />
      </button>
    </div>
  );
};

export default ProductViewToggle;
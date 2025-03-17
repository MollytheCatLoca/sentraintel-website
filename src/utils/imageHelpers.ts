// src/utils/imageHelpers.ts
export const shouldUseFallbackImage = (image?: string) => {
  return !image || image === '';
};

// Default image path that points directly to the public directory
export const DEFAULT_PRODUCT_IMAGE = '/images/communications-solution.jpg';
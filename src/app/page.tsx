import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import TechnologySection from '@/components/sections/TechnologySection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
     
      <SolutionsSection />
      <ProductsSection />
      
      <CTASection />
      
    </MainLayout>
  );
}
// src/app/about/page.tsx
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AboutSection from '@/components/sections/AboutSection';

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutSection />
    </MainLayout>
  );
}
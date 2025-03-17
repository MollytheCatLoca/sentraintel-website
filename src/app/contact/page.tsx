// src/app/contact/page.tsx
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactSection from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactSection />
    </MainLayout>
  );
}
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ErgonomicsSection } from './components/ErgonomicsSection';
import { ConnectivitySection } from './components/ConnectivitySection';
import { PerformanceSection } from './components/PerformanceSection';
import { DesignGallery } from './components/DesignGallery';
import { TechSpecs } from './components/TechSpecs';
import { ReviewsSection } from './components/ReviewsSection';
import { BuySection } from './components/BuySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { BundleOption } from './types';
import { BUNDLE_OPTIONS } from './data/monitorData';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState<BundleOption>(BUNDLE_OPTIONS[0]);

  const handleOpenCart = (bundle?: BundleOption) => {
    if (bundle) {
      setSelectedBundle(bundle);
    }
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-[#f51a7e] selection:text-white font-sans">
      {/* Navigation */}
      <Navbar onOpenCart={() => handleOpenCart()} />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenCart={() => handleOpenCart()} />

        {/* 180Hz & 1ms Performance Simulator */}
        <PerformanceSection />

        {/* Highlight 1: Base Ergonomics & Passa-Cabos (as requested) */}
        <ErgonomicsSection />

        {/* Highlight 2: High Performance Video Connections (as requested) */}
        <ConnectivitySection />

        {/* Modern Design Gallery */}
        <DesignGallery />

        {/* Complete Tech Specs Table */}
        <TechSpecs />

        {/* Community Reviews & Feedback */}
        <ReviewsSection />

        {/* Buy & Bundles Section */}
        <BuySection onSelectBundle={(bundle) => handleOpenCart(bundle)} />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Checkout / Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        selectedBundle={selectedBundle}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
      />
    </div>
  );
}

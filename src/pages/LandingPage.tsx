import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from './Features';
import Pricing from './Pricing';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-deep-purple-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

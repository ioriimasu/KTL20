import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div>
      <Hero />
      <div className="container-wide mx-auto">
        <Footer />
      </div>
    </div>
  );
}

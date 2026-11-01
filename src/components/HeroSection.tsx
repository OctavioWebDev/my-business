import React from 'react';
import { Boxes } from '@/components/ui/background-boxes';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex items-center justify-center clip-sloped">
        <Boxes />
        <h1 className="relative z-20 pointer-events-none font-eurostile text-center text-3xl md:text-4xl lg:text-6xl px-4">
          Navigating
          <br />
          <strong className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-3xl lg:text-5xl">
            Your
          </strong>
          <br />
          Digital Success
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
// import { Boxes } from '../components/ui/background-bokex';
//import { cn } from '@/utils/cn';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex items-center justify-center clip-sloped">
        <h1 className={"font-eurostile text-center text-2xl md:text-3xl lg:text-6xl z-20"}>
          Navigating
          <br />
          <strong className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-2xl lg:text-5xl z-20">
            Your
          </strong>
          <br />
          Digital Success
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;

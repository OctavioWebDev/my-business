import React from 'react';
// import { Boxes } from '../components/ui/background-bokex';
//import { cn } from '@/utils/cn';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WebDesignDeploymentSection from '@/components/WebDesignDeploymentSection';
import ApiDevelopmentSection from '@/components/ApiDevelopmentSection';
import DatabaseSection from '@/components/DatabaseSection';
import CallToAction from '@/components/CallToAction';
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WebDesignDeploymentSection />
      <ApiDevelopmentSection />
      <DatabaseSection />
      <CallToAction />
    </>
  );
}




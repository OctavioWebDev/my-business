import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WebDesignDeploymentSection from '@/components/WebDesignDeploymentSection';
import ApiDevelopmentSection from '@/components/ApiDevelopmentSection';
import DatabaseSection from '@/components/DatabaseSection';
import CallToAction from '@/components/CallToAction';
import WhyChooseUsSection from '@/components/WhyChooseUs';
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <WebDesignDeploymentSection />
      <ApiDevelopmentSection />
      <DatabaseSection />
      <CallToAction />
    </>
  );
}




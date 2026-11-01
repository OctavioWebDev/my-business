import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WebDesignDeploymentSection from '@/components/WebDesignDeploymentSection';
import ApiDevelopmentSection from '@/components/ApiDevelopmentSection';
import DatabaseSection from '@/components/DatabaseSection';
import CallToAction from '@/components/CallToAction';
import WhyChooseUsSection from '@/components/WhyChooseUs';
import { businessJsonLd } from '@/data/seo';

export const metadata = { alternates: { canonical: '/' }, openGraph: { url: '/' } };
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
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




import React from 'react';
import FeatureSection from './FeatureSection';

const ApiDevelopmentSection: React.FC = () => {
  return (
    <FeatureSection
      title="API Development & Integration"
      image={{ src: '/assets/images/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg', alt: 'API Development and Integration', width: 900, height: 900 }}
      imageSide="left"
      textWidth="twoThirds"
      gradient="up"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">API Development</h3>
        <p>
          At Quest Web Development Technologies, we specialize in crafting powerful and efficient APIs that serve as the backbone of your digital infrastructure. Our API development services focus on creating secure, scalable, and reliable APIs that enable seamless communication between your software applications. Whether you need RESTful or SOAP APIs, our team leverages the latest technologies to deliver robust solutions that enhance your system's functionality and interoperability.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">API Integration</h3>
        <p>
          Maximize the potential of your existing systems with our comprehensive API integration services. We ensure smooth and secure integration of third-party APIs, allowing you to expand your capabilities and streamline your operations. Our expertise covers a wide range of APIs, including payment gateways, social media platforms, CRM systems, and more. At Quest Web Development Technologies, we make sure your applications work harmoniously, providing you with a cohesive and efficient digital ecosystem.
        </p>
      </div>
    </FeatureSection>
  );
};

export default ApiDevelopmentSection;

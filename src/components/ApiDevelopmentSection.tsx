import React from 'react';
import Image from 'next/image';

const ApiDevelopmentSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-b to-transparent from-emerald-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/assets/images/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg"
              alt="API Development and Integration"
              width={900}
              height={900}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="font-eurostile text-center md:text-left text-2xl md:text-3xl lg:text-4xl mb-6">
              API Development & Integration
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDevelopmentSection;

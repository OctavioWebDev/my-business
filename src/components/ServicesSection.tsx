import React from 'react';
import Image from 'next/image';
import ServiceLinks from './ServiceLinks';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-950 to-transparent py-12">
      <h2 className="text-center font-eurostile text-3xl font-bold mb-8">Our Services</h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start mb-8 md:gap-4">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Image
              src="/assets/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
              alt="Services Image"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-4">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="mb-4">
              At Quest Web Development Technologies, we specialize in creating responsive, user-friendly, and visually appealing websites tailored to your business needs. Whether you need a simple landing page or a complex web application, our expertise ensures a seamless and engaging online presence for your brand.
            </p>
            
            <h3 className="text-xl font-bold mb-2">API Development</h3>
            <p className="mb-4">
              Unlock the full potential of your software with our robust API development services. We design and implement secure, scalable, and efficient APIs that facilitate smooth communication between your applications and third-party services, enhancing functionality and user experience.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Database Management</h3>
            <p className="mb-4">
              Efficient data management is crucial for any business. Our database services include design, development, and maintenance, ensuring your data is organized, secure, and easily accessible. We work with various database technologies to provide solutions that best fit your specific requirements.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Custom Applications</h3>
            <p className="mb-4">
              Transform your ideas into reality with our custom application development. We build tailor-made software solutions that address your unique business challenges, improve operations, and drive growth. From concept to deployment, we ensure your application meets the highest standards of quality and performance.
            </p>
          </div>
        </div>
        <ServiceLinks />
      </div>
    </section>
  );
};

export default ServicesSection;

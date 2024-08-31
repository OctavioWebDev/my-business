import React from 'react';
import Image from 'next/image';

const WebDesignDeploymentSection: React.FC = () => {
  
  return (
    <div className="relative h-auto overflow-hidden py-12 bg-gradient-to-b from-transparent to-emerald-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-4">
            <h2 className="font-eurostile mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
              Web Design & Development
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p className="mb-4">
                At Quest Web Development Technologies, we believe that a website should be more than just a digital presence; it should be an experience. Our web design services focus on creating aesthetically pleasing, intuitive, and user-centric designs that reflect your brand's identity and captivate your audience. From wireframes and mockups to the final design, we ensure every detail is crafted with precision and creativity, providing you with a website that stands out in the digital landscape.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p>
                Our web development services at Quest Web Development Technologies are designed to bring your vision to life. We build high-performance, scalable, and secure websites using the latest technologies and best practices. Whether you need a content management system, an e-commerce platform, or a custom web application, our team of skilled developers is committed to delivering solutions that meet your business goals and exceed your expectations. We focus on functionality, speed, and reliability, ensuring your website not only looks great but performs flawlessly.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/images/annie-spratt-QckxruozjRg-unsplash.jpg"
              alt="Web Design and Development"
              width={800}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignDeploymentSection;
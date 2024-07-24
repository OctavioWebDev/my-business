import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg')"}}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
        <p className="mb-8 text-xl">
          Contact us today to discuss how Quest Web Development Technologies can help you achieve your goals. Let's build something amazing together!
        </p>
        <Link href="/Contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

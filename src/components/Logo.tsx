'use client'
import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/logos/questwebtech9.png"
        alt="Quest Web Tech Logo"
        width={200}
        height={50}
      />
    </div>
  );
};

export default Logo;

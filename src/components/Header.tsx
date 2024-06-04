'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  return (
    <header className="relative flex justify-between items-center p-4 bg-gradient-to-b from-emerald-950 to-transparent text-white">
      <Logo />
      <div className="flex items-center">
        <Link href="tel:+14193439894">
          <FontAwesomeIcon icon={faPhone} className="text-3xl mr-4 cursor-pointer" />
        </Link>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;




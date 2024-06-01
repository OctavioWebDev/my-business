'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="relative flex justify-between items-center p-4 bg-gradient-to-b from-emerald-950 to-transparent text-white">
        <div className="flex items-center">
          <Image
            src="/assets/logos/questwebtech9.png"
            alt="Quest Web Tech Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex items-center">
          <Link href="tel:+14193439894">
            <FontAwesomeIcon icon={faPhone} className="text-xl mr-4 cursor-pointer" />
          </Link>
          <button onClick={toggleMenu} className="text-xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {menuOpen && (
          <div
            className="absolute top-12 right-0 bg-gradient-to-b from-black to-emerald-950 text-white p-4 shadow-lg z-20"
            onMouseLeave={closeMenu}
          >
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>
              <li>
                <Link href="/Design">Design</Link>
              </li>
              <li>
                <Link href="/Maintenance">Maintenance</Link>
              </li>
              <li>
                <Link href="/Marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/WhyUs">Why Us</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}



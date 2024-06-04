'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HamburgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleMenu}
        onTouchStart={toggleMenu}
        className="text-xl p-2"
        style={{ touchAction: 'manipulation' }}
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl" />
      </button>
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 right-0 bg-gradient-to-b from-black to-emerald-950 text-white p-4 shadow-lg z-10"
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
    </div>
  );
};

export default HamburgerMenu;



'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { navLinks } from '@/data/navigation';

const HamburgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center" onMouseLeave={closeMenu}>
      <button
        onClick={toggleMenu}
        className="text-xl p-2"
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl" />
      </button>
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 right-0 bg-gradient-to-b from-black to-emerald-950 text-white p-4 shadow-lg z-10"
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;



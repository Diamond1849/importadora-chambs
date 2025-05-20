'use client';

import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeaderChambs = ({ id = '' }: { id?: '' | 'nosotros' | 'contacto' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(id);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id as '' | 'nosotros' | 'contacto');
    router.push(`/${id}`);
  };

  const navLinks = [
    { name: 'Inicio', id: '' },
    { name: 'Nosotros', id: 'Nosotros' },
    { name: 'Contacto', id: 'Contacto' },
  ];

  return (
    <header
      className={cn(
        // MEJORA 1: Aumentar la altura del header de h-20 a h-24
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b bg-black/95 text-white shadow-lg border-red-700',
      )}
    >
      {/* MEJORA 2: Aumentar el padding vertical y cambiar la disposición de los elementos */}
      <div className="container mx-auto px-6 flex justify-between items-center h-24">
        {/* Logo - Mantener a la izquierda */}
        <div className="flex-shrink-0">
          <div className="w-48 relative h-14">
            <Image
              src="/chambs-logo.png"
              alt="Chambs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* MEJORA 4: Centrar los enlaces de navegación usando flex-1 y justify-center */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              data-scroll-to={link.id}
              className={cn(
                'px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer relative group',
                activeLink === link.id ? 'text-red-500' : 'text-white hover:text-red-400',
              )}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform transition-transform duration-300',
                  activeLink === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75',
                )}
              />
            </a>
          ))}
        </nav>

        {/* Espacio adicional para equilibrar el layout */}
        <div className="hidden md:block w-48"></div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <Icon icon={'lucide:x'} /> : <Icon icon={'lucide:menu'} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          <div className="mb-8 relative w-48 h-14">
            {/* Mobile logo */}
            <Image
              src="/images/chambs-logo.png"
              alt="Chambs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              data-scroll-to={link.id}
              className={cn(
                'text-2xl font-medium transition-colors duration-200 cursor-pointer relative px-4 py-2',
                activeLink === link.id ? 'text-red-500' : 'text-white',
              )}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-1/2 w-12 h-0.5 bg-red-500 transform -translate-x-1/2 transition-opacity duration-300',
                  activeLink === link.id ? 'opacity-100' : 'opacity-0',
                )}
              />
            </a>
          ))}
        </div>

        {/* Close button at top-right */}
        <button
          className="absolute top-6 right-6 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <Icon icon={'lucide:x'} />
        </button>
      </div>
    </header>
  );
};

export default HeaderChambs;
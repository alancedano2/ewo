// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-4 bg-slate-800/80 backdrop-blur-md text-white shadow-lg">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo de la página"
            width={70}
            height={70}
          />
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link href="/" className="font-bold hover:text-yellow-400 transition-colors duration-300">Inicio</Link>
        </li>
        <li>
          <Link href="/eventos" className="font-bold hover:text-yellow-400 transition-colors duration-300">Eventos</Link>
        </li>
        <li>
          <Link href="/programas" className="font-bold hover:text-yellow-400 transition-colors duration-300">Programas</Link>
        </li>
        <li>
          <Link href="/shopzone" className="font-bold hover:text-yellow-400 transition-colors duration-300">ShopZone</Link>
        </li>
        <li>
          <Link href="/informacion" className="font-bold hover:text-yellow-400 transition-colors duration-300">Informacion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
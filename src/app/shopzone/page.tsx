// src/app/shopzone/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWrapper from '@/components/FadeInWrapper'; // Importa el componente

const ShopZonePage: React.FC = () => {
  return (
    <FadeInWrapper> {/* Envuelve todo el contenido */}
      <div className="relative min-h-screen text-white">
        <Image
          src="/background.png"
          alt="Fondo de ShopZone"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 blur-md z-[-1]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold mb-8 drop-shadow-lg mt-10 text-yellow-400 text-center">EWO Shopzone</h1>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 max-w-6xl w-full mx-auto">
            <div className="relative w-full md:w-2/3 aspect-video shadow-xl rounded-lg overflow-hidden">
              <video 
                src="/ewo-video2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-6 md:w-1/3 flex-grow">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Información de la Tienda</h2>
              <p className="text-gray-300 mb-4">
                EWO Shopzone es la tienda oficial de EWO. Aquí puedes encontrar mercancía exclusiva, ropa de tus luchadores favoritos y mucho más.
              </p>
              <p className="text-gray-300">
                Para más información sobre productos, visitas y promociones, por favor, visita nuestra página de 
                <Link href="https://www.facebook.com/ewopuertorico" target="_blank" className="text-blue-400 hover:underline">
                  Facebook de EWO
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default ShopZonePage;
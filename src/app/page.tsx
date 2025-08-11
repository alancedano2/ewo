// src/app/page.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Video de fondo */}
      <video
        src="/ewo-video.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 min-w-full h-screen object-cover blur-md z-[-1]"
        style={{ opacity: 0.65 }}
      />

      {/* Contenido principal de la página */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
          ¡Bienvenidos a EWO!
        </h1>
        <p className="text-center text-lg md:text-xl mb-8 drop-shadow-lg">
          Tu alternativa real en la lucha libre.
        </p>

        {/* Contenedor de botones */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/eventos" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Eventos
          </Link>
          <Link href="/programas" className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Programas
          </Link>
          <Link href="/shopzone" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            ShopZone
          </Link>
          <Link href="/informacion" className="bg-yellow-700 hover:bg-yellow-800 text-black font-bold py-3 px-6 rounded-full transition duration-300">
            Información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
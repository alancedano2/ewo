// src/app/eventos/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWrapper from '@/components/FadeInWrapper'; // Importa el componente

const EventosPage: React.FC = () => {
  return (
    <FadeInWrapper> {/* Envuelve todo el contenido */}
      <div className="relative min-h-screen text-white">
        <Image
          src="/background.png"
          alt="Fondo de Eventos"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 blur-md z-[-1]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 gap-8">
          <h1 className="text-4xl font-bold mb-6 drop-shadow-lg mt-10 text-yellow-400">Eventos Anteriores</h1>

          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
              {/* Cuadro 1 */}
              <div className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden shadow-lg max-w-md">
                <Image
                  src="/evento-1.jpg"
                  alt="EWO Xmas Agression"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">EWO Xmas Agression</h3>
                  <p className="text-gray-300 text-base drop-shadow-lg">El EWO Xmas Aggression 2024 marcó el regreso de la EWO tras diez años, presentando una nueva generación que busca revitalizar la lucha libre puertorriqueña.</p>
                  <div className="mt-4">
                    <Link href="https://www.youtube.com/watch?v=apCyO2BQ2XE&t=32s&pp=ygUIZXdvIHhtYXM%3D" target="_blank" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Ver video
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cuadro 2 */}
              <div className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden shadow-lg max-w-md">
                <Image
                  src="/evento-2.jpg"
                  alt="EWO Territorio Hostil"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">EWO Territorio Hostil</h3>
                  <p className="text-gray-300 text-base drop-shadow-lg">EWO Territorio Hostil 2025 es un evento de lucha libre que continúa la renovación de la EWO, mostrando intensas rivalidades y nuevas estrellas listas para dominar el territorio y llevar la acción al máximo nivel.</p>
                  <div className="mt-4">
                    <Link href="https://www.youtube.com/watch?v=oIRqb47nGNQ&pp=ygUVZXdvIHRlcnJpdG9yaW8gaG9zdGls" target="_blank" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Ver video
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-6 md:w-1/3 h-fit">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">¿Quieres ver nuevos eventos?</h2>
              <p className="text-gray-300 mb-2">Para ver los nuevos eventos, sintoniza <strong>"EWO El Update"</strong> todos los sábados a las 10 AM en la página de <Link href="/programas" className="text-blue-400 hover:underline"><strong>Programas</strong></Link>.</p>
              <p className="text-gray-300">Allí se anuncian los nuevos eventos. También puedes visitar el <Link href="https://www.facebook.com/ewopuertorico" target="_blank" className="text-blue-400 hover:underline"><strong>Facebook de la EWO</strong></Link> para ver si hay un nuevo evento.</p>
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default EventosPage;
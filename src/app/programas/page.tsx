import React from 'react';
import Image from 'next/image';
import FadeInWrapper from '@/components/FadeInWrapper';

const ProgramasPage: React.FC = () => {
  return (
    <FadeInWrapper>
      <div className="relative min-h-screen text-white">
        {/* Fondo con blur */}
        <Image
          src="/background.png"
          alt="Fondo de Programas"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 blur-md z-[-1]"
        />

        {/* Contenedor principal con el contenido centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold mb-8 drop-shadow-lg mt-10 text-yellow-400 text-center">EWO 'El Update'</h1>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 max-w-6xl w-full mx-auto">
            {/* Contenedor del video aún más grande */}
            <div className="relative w-full md:w-3/4 aspect-video shadow-xl rounded-lg overflow-hidden bg-gray-900/80 p-4">
              <iframe
                src="https://www.youtube.com/embed/G6wynWw7MVM?si=iocSUX0I-y7ERYzb"
                title="EWO El Update"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>

            {/* Cuadro de información más angosto a la derecha */}
            <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-6 md:w-1/4 flex-grow">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Información del Programa</h2>
              <p className="text-gray-300 mb-2"><strong>¿Qué es?</strong> Un programa con todos los detalles de la EWO.</p>
              <p className="text-gray-300 mb-2"><strong>¿Cuándo?</strong> Todos los sábados a las 10 AM.</p>
              <p className="text-gray-300"><strong>¿Qué encontrarás?</strong> Resúmenes de los eventos, entrevistas exclusivas, noticias de última hora y mucho más sobre la EWO y la lucha libre puertorriqueña.</p>
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default ProgramasPage;

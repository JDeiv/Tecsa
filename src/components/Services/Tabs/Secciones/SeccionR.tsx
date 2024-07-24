import React from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../../../../router/paths";

const SeccionR: React.FC = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <video
              className="object-cover h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128 rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://i.imgur.com/lBN4gjy.mp4" type="video/mp4" />
              Tu navegador no admite la reproducción de video.
            </video>
            
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="mt-2 mb-8 text-4xl tracking-wider font-anton md:text-5xl xl:text-6xl">
              Construye Tu Red <br />
              <span className="text-primary">con Tecnología Innovadora </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Crecer es más fácil con una red adaptable que se ajusta a tus
              necesidades.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
             
              <Link
                    className="px-8 py-3 text-lg font-semibold rounded bg-primary"
                    data-te-ripple-color="light"
                    to={CONTACT}
                    role="button"
                  >
                    Construyamos Ahora!
                  </Link>
              <a
                rel="noopener noreferrer"
                href="https://wa.me/+593992651613/?text=Deseo%20cotizar%20mi%20red"
                target="_blank"
                className="px-8 py-3 text-lg font-semibold border rounded  bg-green-500 hover:bg-lime-500"
              >
                WhatsApp 
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeccionR;

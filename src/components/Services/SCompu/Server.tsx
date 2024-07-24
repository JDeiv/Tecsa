//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
// import { Image } from "@nextui-org/react";

const compus = [
  { id: 1, name: "imagen1", ruta: "images/server1.webp" },
  { id: 2, name: "imagen1", ruta: "images/server2.webp" },
  { id: 3, name: "imagen1", ruta: "images/router.webp" },
  { id: 4, name: "imagen1", ruta: "images/rack.webp" },
  { id: 4, name: "imagen1", ruta: "images/cablered.webp" },
  { id: 4, name: "imagen1", ruta: "images/caja.jpg" },
];

const Server = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-16 pb-8 bg-gradient-to-b from-slate-300 to-gray-50">
        <div className="col-span-2 m-5">
          <h1 className="text-xl tracking-wide font-anton">
            {" "}
            Servidores, Torres y Redes
          </h1>
          <p className="my-2">
            ¡Construye una base sólida para tus operaciones tecnológicas con
            nuestra gama de productos de infraestructura de red y servidores de
            alto rendimiento!
          </p>
          <p className="my-2">
            Si estás buscando servidores de alto rendimiento, torres robustas y
            productos para infraestructura de red líderes en la industria, estás
            en el lugar correcto. Permítenos presentarte nuestra emocionante
            gama de soluciones
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <Swiper
            spaceBetween={10} // Espacio entre cada slide
            slidesPerView={1} // Número de slides visibles a la vez
            loop={true} // Bucle infinito
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="p-2 h-72 w-96"
          >
            {compus.map((compu) => (
              <SwiperSlide className="w-full h-full">
                <img src={compu.ruta} alt="" className="w-full h-full mb-4" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Server;

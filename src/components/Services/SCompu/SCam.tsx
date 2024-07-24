//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
// import { Image } from "@nextui-org/react";

const compus = [
  { id: 1, name: "imagen1", ruta: "images/laptop.png" },
  { id: 2, name: "imagen1", ruta: "images/workstation.png" },
  { id: 3, name: "imagen1", ruta: "images/pcgamer.webp" },
  { id: 4, name: "imagen1", ruta: "images/monitor1.png" },
];

const SCam = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-16 pb-8 bg-gradient-to-t from-slate-300 to-gray-50">
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <Swiper
            direction={"vertical"}
            spaceBetween={10} // Espacio entre cada slide
            slidesPerView={1} // Número de slides visibles a la vez
            loop={true} // Bucle infinito
            autoplay={{
              delay: 2600,
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
        <div className="col-span-2 m-5">
          <h1 className="text-xl tracking-wide font-anton">
            {" "}
            Video Vigilancia con las mejores marcas
          </h1>
          <p className="my-2">
            Utilizando la mejor tecnología y personal altamente calificado, con
            las certificaciones y capacidades avaladas por los fabricantes y,
            sobre todo, con experiencia en el manejo de casos y problemas a
            resolver.
          </p>
          <p className="my-2">
            Consultoría, diseño, integración e implantación de soluciones
            avanzadas de voz y datos para empresas. El proceso se inicia con la
            captura y el análisis de los requerimientos del cliente para
            proponer las soluciones más adecuadas a sus necesidades y a su
            presupuesto. Una vez escogida la solución se procede a la
            integración, implantación y entrega del proyecto llave en mano.
          </p>
        </div>
      </div>
    </>
  );
};

export default SCam;

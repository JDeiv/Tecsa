//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
// import { Image } from "@nextui-org/react";

const compus = [
  { id: 1, name: "imagen1", ruta: "images/laptop.png" },
  { id: 2, name: "imagen1", ruta: "images/workstation.png" },
  { id: 3, name: "imagen1", ruta: "images/pcgamer.webp" },
  { id: 4, name: "imagen1", ruta: "images/monitor1.png" },
  { id: 4, name: "imagen1", ruta: "images/astroheadset.webp" },
  { id: 4, name: "imagen1", ruta: "images/mouse.webp" },
  { id: 4, name: "imagen1", ruta: "images/teclado.webp" },
];

const SCompu = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-16 pb-8 bg-gradient-to-t from-slate-300 to-white">
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <Swiper
            direction={"vertical"}
            spaceBetween={10} // Espacio entre cada slide
            slidesPerView={1} // Número de slides visibles a la vez
            loop={true} // Bucle infinito
            autoplay={{
              delay: 3500,
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
            Todo en Computación
          </h1>
          <p className="my-2">
            ¡Descubre la excelencia en tecnología para tu espacio de trabajo con
            nuestra amplia gama de productos de última generación!
          </p>
          <p className="my-2">
            Ya sea que estés buscando laptops, workstations, monitores,
            impresoras, periféricos o herramientas de ofimática, tenemos todo lo
            que necesitas para potenciar tu productividad y llevar tus tareas al
            siguiente nivel.
          </p>
        </div>
      </div>
    </>
  );
};

export default SCompu;

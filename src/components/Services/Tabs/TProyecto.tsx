//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Tab } from "@headlessui/react";
import { Zoom } from "react-awesome-reveal";
import Seccion2 from "./Secciones/SeccionP";

const compus = [
  { id: 1, name: "mesa en reunion", ruta: "https://i.imgur.com/Rm0FJxo.png" },
  { id: 2, name: "persona usando computadora", ruta: "https://i.imgur.com/W6NnDy4.png" },
  { id: 3, name: "codigo en pantalla", ruta: "https://i.imgur.com/pcELbrX.png" },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TProyecto = () => {
  return (
    <Tab.Panel className={classNames("")}>
     <Zoom>
          <Seccion2 />
        </Zoom>
      <div className="py-8 lg:border-t-2 border-primary-content  lg:mt-6 ">
        
        <Zoom>
        <div className=" py-16  md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 px-4 pt-4 pb-8  lg:flex-row lg:px-16">
            <div className="flex items-center justify-center w-full h-full col-span-2 ">
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
                className="md:w-full h-72 w-96 -z-10"
              >
                {compus.map((compu) => (
                  <SwiperSlide key={compu.id} className="w-full h-full">
                    <img
                      src={compu.ruta}
                      alt={compu.name}
                      className="object-cover w-full h-full mb-4 md:rounded-tl-[4rem]  md:rounded-br-[4rem]  rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-2 w-full  lg:px-8  p-4  rounded-lg ">
              <h1 className="mb-12 text-4xl font-bold leading-tight tracking-wider font-anton ">
                Diseño e implementación <br />
                <span className="text-primary">
                  de tu proyectos tecnológicos
                </span>
              </h1>
              <p className="my-2 font-ubuntu">
                Utilizando la mejor tecnología y personal altamente calificado,
                con las certificaciones y capacidades avaladas por los
                fabricantes y, sobre todo, con experiencia en el manejo de casos
                y problemas a resolver.
              </p>
              <p className="my-2 font-ubuntu">
                Consultoría, diseño, integración e implantación de soluciones
                avanzadas de voz y datos para empresas. El proceso se inicia con
                la captura y el análisis de los requerimientos del cliente para
                proponer las soluciones más adecuadas a sus necesidades y a su
                presupuesto. Una vez escogida la solución se procede a la
                integración, implantación y entrega del proyecto llave en mano.
              </p>
            </div>
          </div>
        </div>
      </Zoom>
      </div>
    </Tab.Panel>
  );
};

export default TProyecto;

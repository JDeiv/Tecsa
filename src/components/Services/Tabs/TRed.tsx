//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Tab } from "@headlessui/react";
import { Fade, Zoom } from "react-awesome-reveal";
import SeccionR from "./Secciones/SeccionR";

const compus = [
  { id: 1, name: "logo windows server", ruta: "https://i.imgur.com/xchm0wj.gif" },
  { id: 2, name: "cuarto de equipos", ruta: "https://i.imgur.com/J4mXzKM.jpg" },
  { id: 3, name: "switch pequeño", ruta: "https://i.imgur.com/gmXUYxj.png" },
  { id: 4, name: "cableado de fibra óptica", ruta: "https://i.imgur.com/YS7hU4j.jpg" },
  { id: 5, name: "rack grande", ruta: "https://i.imgur.com/L3QsiZ6.png" },
  { id: 6, name: "router", ruta: "https://i.imgur.com/tfMYXPr.jpg" },
  { id: 7, name: "router", ruta: "https://i.imgur.com/SMUak5S.jpg" },


];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TRed = () => {
  return (
    <Tab.Panel className={classNames("")}>
      <Fade>
        <SeccionR />
      </Fade>
      <div className="py-8 lg:border-t-2 lg:mt-6 ">
        <Zoom>
          <div className=" mx-auto md:px-6">
            <div className="text-base text-center lg:text-start dark:bg-neutral-900">
              <div className="px-6 py-12 md:px-12">
                <div className="flex flex-col items-center justify-center px-4 pt-4 pb-8 lg:grid lg:grid-cols-4 lg:px-16">
                  
                  <div className="col-span-2 w-full  lg:px-8  p-4  rounded-lg ">
                    <h1 className="mb-12 text-4xl font-bold leading-tight tracking-wider font-anton ">
                      Conexiones sin Límites <br />
                      <span className="text-primary">para tu Empresa</span>
                    </h1>
                    <p className="my-2 font-ubuntu">
                      Imagina una red que se adapta a tus necesidades incluso
                      antes de que te des cuenta. Visualiza una infraestructura
                      que no solo responde a la demanda, sino que la anticipa,
                      ofreciéndote una experiencia sin interrupciones, rápida y
                      confiable.
                    </p>
                    <p className="my-2 font-ubuntu">
                      Únete a nosotros en esta emocionante travesía hacia
                      horizontes inexplorados de la infraestructura en redes.
                    </p>
                    <p className="my-2 font-ubuntu">
                      Esto es más que tecnología: es el arte de construir
                      conexiones poderosas.
                    </p>
                  </div>
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
                      className="p-2 h-72 lg:h-[28rem] w-96 shadow-br-lg"
                    >
                      {compus.map((compu) => (
                        <SwiperSlide key={compu.id} className="w-full h-full">
                          <img
                            src={compu.ruta}
                            alt=""
                            className="w-full h-full mb-4 object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </Tab.Panel>
  );
};

export default TRed;

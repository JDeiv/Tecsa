//import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Tab } from "@headlessui/react";
import { Zoom, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { CONTACT } from "../../../router/paths";

const compus = [
  { id: 1, name: "camaras", ruta: "https://i.imgur.com/7KttLIg.jpg" },
  { id: 2, name: "camaras en esquinas", ruta: "https://i.imgur.com/I2j8MGn.jpg" },
  { id: 3, name: "cctv", ruta: "https://i.imgur.com/imvrmOp.jpg" },
  { id: 4, name: "dvr y camaras", ruta: "https://i.imgur.com/fyH0Yhl.png" },
  { id: 5, name: "poste de vigilancia", ruta: "https://i.imgur.com/ShGt8zc.jpg" },
  { id: 6, name: "alarma incendios manual", ruta: "https://i.imgur.com/Sq77FV4.jpg" },
  { id: 7, name: "imagalarma agua", ruta: "https://i.imgur.com/H3iAUoU.jpg" },
  { id: 8, name: "tubería incendios", ruta: "https://i.imgur.com/i9vj8E4.jpg" },
  { id: 9, name: "tubería incendios", ruta: "https://i.imgur.com/Tg2DmRi.jpg" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TSecurity = () => {
  return (
    <Tab.Panel className={classNames("")}>
      <Zoom>
        <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 ">
          <div className="relative px-6 pt-16 overflow-hidden bg-gray-800 shadow-2xl isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left ">
              <h1 className="text-3xl tracking-wider text-white font-anton md:text-4xl xl:text-5xl ">
                Refuerza Tu Protección
                <br />
                <span className="text-primary">
                  Para aquello que te importa.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300 font-ubuntu">
                En un mundo donde la seguridad es primordial, la adquisición de
                un sistema CCTV se presenta como una necesidad ineludible.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start font-ubuntu">
                <Link
                  to={CONTACT}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Cotizar
                </Link>
                <a
                  href="https://wa.me/+593992651613/?text=Deseo%20cotizar%20mi%20Seguridad"
                  className="text-sm font-semibold leading-6 text-white font-ubuntu"
                >
                  Vamos <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-full lg:mt-8">
              <video
                className="lg:absolute left-0 top-20 md:w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 "
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="images/cams.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de video.
              </video>

              {/* <div className="flex items-center justify-center w-full h-full col-span-2 lg:hidden">
                <Swiper
                  spaceBetween={10} // Espacio entre cada slide
                  slidesPerView={1} // Número de slides visibles a la vez
                  loop={true} // Bucle infinito
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className=" h-72 w-96"
                >
                  {compus.map((compu) => (
                    <SwiperSlide key={compu.id} className="w-full h-full">
                      <img
                        src={compu.ruta}
                        alt=""
                        className="object-contain w-full h-full mb-4 "
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div> */}
            </div>
          </div>
        </div>
      </Zoom>
      <div className="py-8 lg:border-t-2 lg:mx-20 md:mt-6">
        <Fade>
          <section className="grid items-center gap-4 py-8 m-8 rounded-lg shadow-xl lg:grid-cols-3 justify-items-center grid-row-3">
            <article className="flex flex-col items-start justify-end h-full px-4 ">
              <h2 className="text-3xl tracking-wider font-anton md:text-4xl xl:text-5xl ">
                Importancia
              </h2>
              <p className="p-2 font-ubuntu">
                La elegancia inherentemente ligada al sistema CCTV trasciende la
                mera vigilancia, transformándola en una experiencia estética y
                confiable.
              </p>
              <p className="p-2 font-ubuntu">
                Cada imagen capturada es más que una instantánea; es un símbolo
                de salvaguardia continua en un mundo en constante cambio.
              </p>
            </article>
            <div className="w-full h-full px-4 lg:h-96 lg:px-0 ">
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
                <SwiperSlide key={compu.id} className="w-full h-full">
                  <img src={compu.ruta} alt="" className="w-full h-full mb-4" />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            <article className="flex flex-col items-center justify-start h-full px-4">
              <p className="p-2 font-ubuntu">
                "Con esta solución tecnológica, no solo abrazas la seguridad,
                sino que también te sumerges en un estado de tranquilidad donde
                la protección es tanto una necesidad como una expresión de
                estilo."
              </p>
            </article>
          </section>
        </Fade>
      </div>
    </Tab.Panel>
  );
};

export default TSecurity;

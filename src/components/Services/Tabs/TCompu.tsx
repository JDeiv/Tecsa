import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Tab } from "@headlessui/react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { CONTACT } from "../../../router/paths";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@nextui-org/react";

const compus = [
  { id: 1, name: "laptop", ruta: "https://i.imgur.com/vvAI7HN.png" },
  { id: 2, name: "workstation", ruta: "https://i.imgur.com/YnSQBsA.png" },
  { id: 3, name: "pc gamer desktop", ruta: "https://i.imgur.com/vFiBnGX.png" },
  { id: 4, name: "monitor Lenovo", ruta: "https://i.imgur.com/DB7YOZ7.png" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TCompu = () => {
  return (
    <Tab.Panel className={classNames("w-full ")}>
      <Zoom>
        <div className="container mx-auto my-16 md:px-6">
          <section className="mb-32 ">
            <div className="block rounded-lg bg-base shadow-2xl ">
              <div className="flex flex-col grid-cols-2 gap-2 lg:grid ">
                <div className="hidden grid-flow-col grid-rows-4 gap-4 p-4 lg:grid">
                  <div className="flex items-center justify-center w-40 h-32 col-span-1 p-1 bg-gradient-to-t from-sky-200  rounded-2xl">
                    <img
                      src="https://i.imgur.com/4vAiup8.png"
                      className="object-contain "
                      alt=""
                    />
                  </div>
                  <div className="row-span-3 col-span-2 bg-gradient-to-t from-red-200 flex items-center justify-center rounded-2xl  ...">
                    <img
                      src="https://i.imgur.com/CUDyD9l.png"
                      className="object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center w-40 h-32 col-span-1 p-1 bg-gradient-to-b from-yellow-200  rounded-2xl ">
                    <img
                      src="https://i.imgur.com/RUsUVa5.png"
                      className="object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center col-span-2 row-span-3 bg-gradient-to-r from-orange-200  rounded-2xl ">
                    <img
                      src="https://i.imgur.com/832qHtx.png"
                      className="object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center w-40 h-32 col-span-1 p-1 bg-gradient-to-l from-green-200 boder rounded-2xl ">
                    <img
                      src="https://i.imgur.com/4hHnx5F.png"
                      className="object-cover "
                    />
                  </div>
                  <div className="flex items-center justify-center w-40 h-32 col-span-1 p-1 bg-gradient-to-b from-violet-200 rounded-2xl">
                    <img
                      src="https://i.imgur.com/RepVFVo.png"
                      className="object-cover "
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full col-span-2 lg:hidden">
                  <div className="h-screen w-screen flex justify-center items-center bg-slate-900 ">
                    <div className="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">

                      <div className="grid grid-cols-6 col-span-2   gap-2  ">
                        <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                          <img
                            className="h-full w-full object-cover "
                            src="https://i.imgur.com/4vAiup8.png"
                            alt=""
                          />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                          <img
                            className="h-full w-full object-cover  "
                            src="https://i.imgur.com/EWoIyD9.jpg"
                            alt=""
                          />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                          <img
                            className="h-full w-full object-cover "
                            src="https://i.imgur.com/2X3EuI5.jpg"
                            alt=""
                          />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                          <img
                            className="h-full w-full object-cover "
                            src="https://i.imgur.com/32OGbYw.png"
                            alt=""
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                          <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                            + 23
                          </div>
                          <img
                            className="h-full w-full object-cover "
                            src="https://i.imgur.com/32OGbYw.png"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="flex justify-between pt-5">
                        <svg
                          className="h-4 w-4 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                          />
                        </svg>

                        <div className="text-slate-400 text-sm">
                          <p>No esperes que te lo cuenten</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-16 ">
                  <div className="w-full shrink-0 grow-0 basis-auto ">
                    <div className="px-6 py-12 md:px-12 font-ubuntu">
                      <h1 className="mb-8 text-4xl font-bold leading-tight tracking-wider font-anton text-black">
                        Elegancia Tecnológica: <br />
                        <span className="text-primary">
                          con equipos de Élite
                        </span>
                      </h1>
                      <p className="pb-2 mb-6 text-neutral-500 dark:text-neutral-300">
                        Descubre la perfecta fusión entre estilo y rendimiento
                        con nuestra exclusiva selección de equipos de élite.
                        Diseñados para profesionales exigentes como tú, nuestros
                        equipos ofrecen un desempeño excepcional sin sacrificar
                        la elegancia.
                      </p>

                      <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Soporte
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Diagnóstico
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Componentes
                          </p>
                        </div>
                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Updates
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Accesorios
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Smartphones
                          </p>
                        </div>
                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Garantías
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Clones
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 text-base"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Equipos de Oficina
                          </p>
                        </div>
                      </div>
                      <div className="flex  space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
                        <Link
                          className="px-8 py-3 font-semibold rounded bg-primary text-primary-content flex justify-center"
                          data-te-ripple-color="light"
                          to={CONTACT}
                          role="button"
                        >
                          Lo quiero <span aria-hidden="true">→</span>
                        </Link>
                        <a
                          className="flex items-center justify-center my-2 lg:w-1/2 lg:mx-4"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          href="https://wa.me/+593992651613/?text=Deseo%20cotizar%20mi%20Equipo"
                          role="button"
                        >
                          <Button
                            className=" rounded px-16 pt-4 pb-3.5 text-[3rem] 
                    font-medium uppercase leading-normal text-green-500 
                    hover:bg-opacity-10 hover:text-green-600  focus:outline-none 
                    focus:ring-0 active:text-green-700 dark:hover:bg-opacity-40"
                            variant="light"
                          >
                            <IoLogoWhatsapp />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Zoom>
      <div className="py-8 lg:border-t-2 lg:mt-6">
        <Zoom>
          <div className="flex flex-col items-center justify-center gap-4 px-6 pt-4 pb-8 lg:grid lg:grid-cols-4 lg:px-40">
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
                className="p-2 h-72 w-96 lg:h-[28rem]"
              >
                {compus.map((compu) => (
                  <SwiperSlide key={compu.id} className="w-full h-full">
                    <img
                      src={compu.ruta}
                      alt=""
                      className="w-full h-full mb-4 object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-2 ">
              <h1 className="mb-12 text-4xl font-bold leading-tight tracking-wider font-anton ">
                Elegancia Tecnológica: <br />
                <span className="text-primary">con Equipos de Élite</span>
              </h1>
              <p className="my-2 font-ubuntu">
                Descubre la perfecta fusión entre estilo y rendimiento con
                nuestra exclusiva selección de equipos de élite. Diseñados para
                profesionales exigentes como tú, nuestros equipos ofrecen un
                desempeño excepcional sin sacrificar la elegancia.
              </p>
              <p className="my-2 font-ubuntu">
                Desde diseños meticulosamente elaborados hasta un rendimiento
                fluido y rápido, estos equipos están diseñados para adaptarse
                perfectamente a tu entorno de trabajo.
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </Tab.Panel>
  );
};

export default TCompu;

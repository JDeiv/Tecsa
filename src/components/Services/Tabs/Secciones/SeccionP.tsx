import { Link } from "react-router-dom";
import { CONTACT } from "../../../../router/paths";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@nextui-org/react";

const Seccion2 = () => {
  return (
    <>
      <section className="mb-20">
        <div className="px-6 pt-12 text-center md:px-12 lg:text-left">
          <div className="mx-auto w-100 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 className="mt-2 mb-16 text-4xl tracking-wider font-anton md:text-5xl xl:text-6xl">
                    Da Vida a tus Proyectos <br />
                    <span className="text-primary">y Mejora tu Negocio</span>
                  </h1>
                  <Link
                    className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0 font-ubuntu"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    to={CONTACT}
                    role="button"
                  >
                    Empieza Ahora!
                  </Link>
                  <a
                    className="flex items-center justify-center my-2 lg:w-1/2 lg:mx-4"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="https://wa.me/+593992651613/?text=Deseo%20cotizar%20mi%20proyecto"
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
              <div className="md:mb-12 lg:mb-0">
                <video
                  className="w-full h-[30rem] rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                 
                  <source src="https://i.imgur.com/jzqZjRr.mp4" type="video/mp4" />
                  Tu navegador no admite la reproducción de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seccion2;

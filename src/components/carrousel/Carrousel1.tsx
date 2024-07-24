import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonDefault from "../botones/ButtonDefault";
//import ButtonCyan from "../botones/ButtonCyan";
import ZoomInDiv from "./ZoomIn";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
//import { AiOutlineArrowsAlt } from "react-icons/ai";

const images = [
  {
    id: 1,
    name: "imagen1",
    ruta: "https://i.imgur.com/7TdUN9T.jpg",
    titulo: " Conquista el Futuro con Tecsago",
    description:
      " Únete a la ola de la tecnología. Navega hacia la innovación y el progreso",
    btn: "Servicios",
  },
  {
    id: 2,
    name: "imagen1",
    ruta: "https://i.imgur.com/7FXVcft.jpg",
    titulo: "Tu Futuro, Nuestra Tecnología",
    description:
      "Transformamos tu visión en realidad digital. Nuestra tecnología es tu puerta hacia un futuro brillante.",
    btn: "Futuro",
  },
  {
    id: 3,
    name: "imagen1",
    ruta: "https://i.imgur.com/ZscdzIP.jpg",
    titulo: "Eleva tus Proyectos Digitales",
    description: "Descubre el poder de la excelencia tecnológica.",
    btn: "Desarrollo",
  },
  {
    id: 4,
    name: "imagen1",
    ruta: "https://i.imgur.com/BJYL75Q.png",
    titulo: "Impulsando Tu Futuro Digital",
    description:
      "Acelera tu camino hacia el éxito digital con Tecsago, donde la innovación es constante y el futuro está al alcance de tus manos",
    btn: "Innovación",
  },
  {
    id: 5,
    name: "imagen1",
    ruta: "https://i.imgur.com/tG0CViP.jpg",
    titulo: "Tu Socio en la Era Digital",
    description:
      "Brindando un impulso tecnológico a tus aspiraciones y proyectos.",
    btn: "Soporte",
  },
];

const Carrousel1: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="lg:h-screen md:h-[500px] h-[400px]  w-full  flex items-center justify-center "
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <ZoomInDiv background={image.ruta} >
              <div className="flex items-center justify-center">
                <div className="text-center text-white lg:px-28 lg:py-32 lg:text-start">
                  <ButtonDefault title={image.btn} />
                  <h1
                    key={image.id}
                    className="text-xl text-center font-anton lg:tracking-wider lg:text-8xl lg:text-start"
                  >
                    {image.titulo}
                  </h1>
                  <p className="p-4 text-sm lg:text-start text-center lg:w-1/2 lg:text-2xl font-ubuntu lg:pt-8">
                    {image.description}
                  </p>
                </div>
              </div>
            </ZoomInDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrousel1;

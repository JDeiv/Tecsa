import React from "react";
// import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./About.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  
  Autoplay,
} from "swiper/modules";



const images = [
  { id: 1, name: "brand1", ruta: "images/asus.png" },
  { id: 2, name: "brand2", ruta: "images/dell.png" },
  { id: 3, name: "brand3", ruta: "images/epson.png" },
  { id: 4, name: "brand4", ruta: "images/genius.png" },
  { id: 5, name: "brand5", ruta: "images/hiki.png" },
  { id: 6, name: "brand6", ruta: "images/hp.png" },
  { id: 7, name: "brand7", ruta: "images/intel.png" },
  { id: 8, name: "brand8", ruta: "images/king.png" },
  { id: 9, name: "brand9", ruta: "images/klip.png" },
  { id: 10, name: "brand10", ruta: "images/lenovo.png" },
  { id: 11, name: "brand11", ruta: "images/lg.png" },
  { id: 12, name: "brand12", ruta: "images/microsoft.png" },
  { id: 13, name: "brand13", ruta: "images/next.png" },
  { id: 14, name: "brand14", ruta: "images/samsun.png" },
];

const Brands:React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 m-3 lg:flex-row lg:ml-28">
      <div className="text-xl font-semibold font-ubuntu">
        <h2>Marcas</h2>
        
      </div>
      <div className="border border-orange-500 border-spacing-2 w-28"></div>
        <div className="flex justify-center lg:w-[80%] w-full py-1">
        <Swiper
        
        spaceBetween={30}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop= {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[ Autoplay]}
        className="swiper_container lg:flex"
      >
        {images.map((image) => (
          <div key={image.id}>
            <SwiperSlide>
              <img src={image.ruta} alt={image.name} className="object-contain rounded-lg h-36"/>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
        </div>
    </div>
  );
};

export default Brands;

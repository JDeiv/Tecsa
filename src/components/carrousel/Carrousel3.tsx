import React from "react";
import "swiper/css";
//
//import "./Carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay} from "swiper/modules";

// import img1 from "/images/img1.jpg";
// import img2 from "/images/img2.jpg";
// import img3 from "/images/img3.jpg";

const images = [
  { id: 1, name: "Asus", ruta: "images/asus.png" },
  { id: 2, name: "Dell", ruta: "images/dell.png" },
  { id: 3, name: "Epson", ruta: "images/epson.png" },
  { id: 4, name: "Genius", ruta: "images/genius.png" },
  { id: 5, name: "Hikivision", ruta: "images/hiki.png" },
  { id: 6, name: "HP", ruta: "images/hp.png" },
  { id: 7, name: "Intel", ruta: "images/intel.png" },
  { id: 8, name: "Kingstong", ruta: "images/king.png" },
  { id: 9, name: "brand9", ruta: "images/klip.png" },
  { id: 10, name: "Lenovo", ruta: "images/lenovo.png" },
  { id: 11, name: "LG", ruta: "images/lg.png" },
  { id: 12, name: "Microsoft", ruta: "images/microsoft.png" },
  { id: 13, name: "Nexxt", ruta: "images/next.png" },
  { id: 14, name: "Samsun", ruta: "images/samsun.png" },
];

const Carrousel3:React.FC = () => {
  return (
    <>
      <div className="w-screen lg:w-full">
        <Swiper
        spaceBetween={10}
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           autoplay={{
            delay: 1500,
          }}
          loop={true}
          slidesPerView={'auto'}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 2.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              
            }}
           coverflowEffect={{
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows:false ,
          }}
          //pagination={{ el: ".swiper-pagination", clickable: true }}
          
          modules={[EffectCoverflow, Autoplay]}
          className="w-full h-40 "
        >
          
          
          {images.map((image) => (
            <SwiperSlide >
            <img src={image.ruta} alt={image.name} className="h-[90%] object-contain " />
          </SwiperSlide>
          ))}

          {/* <div className="flex items-center justify-center slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <AiOutlineArrowLeft />
            </div>

            <div className="swiper-button-next slider-arrow">
              <AiOutlineArrowRight />
            </div> 

             <div className="cursor-pointer swiper-pagination "></div>
          </div> */}
        </Swiper>
      </div>
       
    </>
  );
};

export default Carrousel3;

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
//import 'swiper/swiper-bundle.min.css';
//import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ZoomInDivProps {
    background: string;
    children: React.ReactNode;
  }
  const images = [
    { id: 1, name: "imagen1", ruta: "images/laptop.png" },
    { id: 2, name: "imagen1", ruta: "images/workstation.png" },
    { id: 3, name: "imagen1", ruta: "images/pcgamer.webp" },
    { id: 4, name: "imagen1", ruta: "images/monitor1.png" },
  ];


const Zoomer:React.FC<ZoomInDivProps> = ({  children }) => {
  const props = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    config: { duration: 4000 }, // Duración de la animación en milisegundos
    loop: true, // Hacer que la animación se repita
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-auto overflow-hidden">
        <animated.div className="relative w-full h-full" style={props}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            
          >
            {images.map((index) => (
              <SwiperSlide >
                <div className="relative w-full h-full">
                  <img src="images/img1.jpg" alt={`Slide ${index}`} className="object-cover w-full h-full" />
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {children}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </animated.div>
      </div>
    </div>
  );
};

export default Zoomer;

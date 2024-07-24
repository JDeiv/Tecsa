import Layaut from "../../layaut/Layaut";
import Carrousel1 from "../carrousel/Carrousel1";
import Carrousel2 from "../carrousel/Carrousel2";
import Cantidades from "./Cantidades";

import HomeUS from "./HomeUS";
import CardsH from "./CardsH";
import Team from "../Nosotros/Team";
//import ButtonCyan from "../botones/ButtonCyan";

const Home = () => {
  return (
    <Layaut>
      <div className="h-[100%] overflow-hidden ">
        {/* <SliderCustomArrows /> */}
        {/* <SliderSwiper /> */}
        <Carrousel1 />
        {/*<ZoomImage />*/}
      </div>
      <div className="flex items-center justify-between bg-gradient-to-b from-slate-300 to-gray-50 lg:h-48">
        <div className="flex flex-col items-start justify-between w-full gap-8 p-4 m-1">
          <h2 className="mt-0 text-2xl tracking-wider font-anton">TECSAGO</h2>
          <p className="text-[2rem] lg:block hidden font-ubuntu">
            Somos el aliado tecnológico para potenciar tu negocio.
          </p>
        </div>
        <div className="flex items-center justify-center p-4 m-1 text-[1.1rem] font-ubuntu">
          <p>
            Ofrecemos soluciones de alta calidad en informática, electrónica y
            telecomunicaciones, además de servicios profesionales de outsourcing
            para optimizar tu entorno empresarial.
          </p>
        </div>
      </div>
      

      <Carrousel2 title="Nuestros Aliados Tecnológicos" />

     <div className="">
     <HomeUS />
     </div>
      <CardsH />
      
      <div className="shadow-lg">
      <Team title="Nuestro Equipo" />
      </div>
      <Cantidades />
      {/* <Perfil /> */}
     
      
    </Layaut>
  );
};

export default Home;

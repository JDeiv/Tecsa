//import React from "react";
import Card3D from "../cards/Card3D";

const CardsH = () => {
  return (
    <>
      <div className="p-8 m-6">
        <h1 className="text-center  h-auto w-full  text-4xl font-anton tracking-[0.2em]">
        ¡Potencia tu Futuro con Nuestros Servicios!
        </h1>
        <div className="gap-10 m-2 lg:grid lg:grid-cols-3 lg:justify-items-center ">
          {/*<!-- TARJETA 1 --> */}
          <div className="flex-col items-center justify-center w-full mt-8  text-base-content">
            <Card3D
              image="images/img3.jpg"
              title="Proyectos Tecnológicos"
              description="Desata tu creatividad y da vida a tus ideas con nuestros proyectos tecnológicos a medida. "
            />
          </div>

          {/*<!-- TARJETA 2 --> */}
          <div className="flex-col items-center justify-center w-full mt-8 text-base-content ">
            <Card3D
              image="images/img1.jpg"
              title="Infraestructura en redes"
              description="¡Haz realidad tus sueños digitales hoy mismo, cotiza nuestros servicios ahora"
            />
          </div>

          {/*<!-- TARJETA 3 --> */}
          <div className="flex-col items-center justify-center w-full mt-8  text-base-content">
            <Card3D
              image="images/img2.jpg"
              title="Seguridad Electrónica"
              description="Protege lo que más valoras con nuestra seguridad electrónica de vanguardia"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsH;

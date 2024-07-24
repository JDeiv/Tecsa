import React from "react";
import {
  Image
} from "@nextui-org/react";

import './About.css';

interface Props {
  title: string;
}
const Team: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4  lg:grid lg:grid-cols-2 font-ubuntu ">
      <div className="flex items-center justify-center h-full card ">
        <div className="card lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] relative animate-move bg-puntos  rounded-full shadow-sm ">
          <Image
            src="images/img1.jpg"
            alt="Imagen zoom cover"
            className=" lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] objet-cover left-5 bottom-10 rounded-full transition-transform transform-gpu hover:scale-110"
          />
        </div>
      </div>
      <div>
        <div className="h-full col-start-1 ">
          <h1 className="font-anton text-4xl tracking-[0.2rem] py-4 px-8">
            {title}
          </h1>
          <p className="px-16 py-4 pr-8 font-ubuntu from-content1-foreground">
            {" "}
            Nuestro equipo de colaboradores está integrado por personas con una
            amplia experiencia en el mercado de tecnología de la información,
            con una importante preparación académica y una mentalidad
            innovadora.Talento, colaboración, trabajo y compromiso, son solo
            algunas de las características que reúne la gente que integra
            nuestra organización; siempre estaremos dispuestos a servirle con
            oportunidad, honestidad y calidad. Damos respuesta con efectividad y
            oportunidad a cada una de las interrogantes que se plantea el
            desarrollo de sus proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
